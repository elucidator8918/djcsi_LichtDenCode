from typing import List,Annotated
import uvicorn
import os
from fastapi import FastAPI,UploadFile
from keras.models import Model as KerasModel
from keras.layers import Input, Dense, Flatten, Conv2D, MaxPooling2D, BatchNormalization, Dropout, Reshape, Concatenate, LeakyReLU
from keras.optimizers import Adam
from keras.preprocessing.image import ImageDataGenerator
import base64
from io import BytesIO
from PIL import Image
import numpy as np
#PHISH IMPORTS
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats
from statsmodels.stats.outliers_influence import variance_inflation_factor
from autoviz.classify_method import data_cleaning_suggestions ,data_suggestions
from pycaret import regression
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import LabelEncoder
from transformers import BertModel, BertTokenizer
import torch
import joblib
from deepface import DeepFace
from sklearn.linear_model import LogisticRegression

app = FastAPI()

@app.get("/")
def func1():
    return {"message":"Hello"}
    
@app.post("/phish")
def phishpipe(url: str):
    # Load the pre-trained BERT model and tokenizer
    model = BertModel.from_pretrained('bert-base-uncased', output_hidden_states=True)
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
    
    # Quantize the BERT model
    def quantize_model(model):
        quantized_model = torch.quantization.quantize_dynamic(
            model, {torch.nn.Linear}, dtype=torch.qint8
        )
        return quantized_model
    model = quantize_model(model)

    # Define a function to extract features for each transaction
    def extract_features(text):
        # Tokenize the text
        input_ids = torch.tensor([tokenizer.encode(text, add_special_tokens=True)])
        # Get the hidden states for each token
        with torch.no_grad():
            outputs = model(input_ids)
            hidden_states = outputs[2]
        # Concatenate the last 4 hidden states
        token_vecs = []
        for layer in range(-4, 0):
            token_vecs.append(hidden_states[layer][0])
        # Calculate the mean of the last 4 hidden states
        features = []
        for token in token_vecs:
            features.append(torch.mean(token, dim=0))
        # Return the features as a tensor
        return torch.stack(features)

    # Extract features for each transaction
    features = []
    features.append(extract_features(url))    
    # Concatenate the features and convert to a numpy array
    features = torch.cat(features).numpy()    
    features_reshaped = features.reshape((1,-1))
    # concatenate the feature array with the label array horizontally    
    logmod = joblib.load("LOGMODFINAL")
    fu=int(logmod.predict(features_reshaped))
    if fu==0:
        return {"response":"Benign/Good"}
    elif fu==1:
        return {"response":"Defacement/Breaking Frontend"}
    elif fu==2:
        return {"response":"Malware/Bad thing"}
    else:
        return {"response":"Phishing/Fraud"}
        
@app.post("/deepface")
def deepface(files: List[UploadFile]):
    images = []
    for file in files:
        # Load the image file        
        with open(file.filename, "wb") as f:
            f.write(file.file.read())
        image = Image.open(file.filename)
        image = image.convert("RGB").resize((256, 256))
        # Normalize pixel values and convert to numpy array
        image_array = np.array(image) / 255.0
        images.append(image_array)

    same_person = True
    # Verify if all images belong to the same person
    for i in range(len(images)):
        for j in range(i+1, len(images)):
            result = DeepFace.verify(images[i], images[j], enforce_detection=False)
            if not result["verified"]:
                same_person = False
                break

    if same_person:
        return {"response": "Same"}
    else:
        return {"response": "Not Same"}
    
@app.post("/deepfake")
async def deepfake(file: UploadFile):
    IMGWIDTH=256
    print(file)
    class Classifier:
        def __init__():
            self.model = 0

        def predict(self, x):
            return self.model.predict(x)

        def fit(self, x, y):
            return self.model.train_on_batch(x, y)

        def get_accuracy(self, x, y):
            return self.model.test_on_batch(x, y)

        def load(self, path):
            self.model.load_weights(path)

    class Meso4(Classifier):
        def __init__(self, learning_rate = 0.001):
            self.model = self.init_model()
            optimizer = Adam(lr = learning_rate)
            self.model.compile(optimizer = optimizer, loss = 'mean_squared_error', metrics = ['accuracy'])

        def init_model(self): 
            x = Input(shape = (IMGWIDTH, IMGWIDTH, 3))

            x1 = Conv2D(8, (3, 3), padding='same', activation = 'relu')(x)
            x1 = BatchNormalization()(x1)
            x1 = MaxPooling2D(pool_size=(2, 2), padding='same')(x1)

            x2 = Conv2D(8, (5, 5), padding='same', activation = 'relu')(x1)
            x2 = BatchNormalization()(x2)
            x2 = MaxPooling2D(pool_size=(2, 2), padding='same')(x2)

            x3 = Conv2D(16, (5, 5), padding='same', activation = 'relu')(x2)
            x3 = BatchNormalization()(x3)
            x3 = MaxPooling2D(pool_size=(2, 2), padding='same')(x3)

            x4 = Conv2D(16, (5, 5), padding='same', activation = 'relu')(x3)
            x4 = BatchNormalization()(x4)
            x4 = MaxPooling2D(pool_size=(4, 4), padding='same')(x4)

            y = Flatten()(x4)
            y = Dropout(0.5)(y)
            y = Dense(16)(y)
            y = LeakyReLU(alpha=0.1)(y)
            y = Dropout(0.5)(y)
            y = Dense(1, activation = 'sigmoid')(y)

            return KerasModel(inputs = x, outputs = y)        
    MesoNet_classifier = Meso4()
    MesoNet_classifier.load("Meso4_DF.h5")        
    # decode base64 data and convert it to a Numpy array
    with open(file.filename, "wb") as f:
        f.write(file.file.read())
    image = Image.open(file.filename)    
    image = image.resize((256, 256)).convert("RGB")    
    # Normalize pixel values and convert to numpy array
    image_array = np.array(image) / 255.0    
    image_array = np.expand_dims(image_array, axis=0)
    # make a prediction using the loaded model
    prediction = MesoNet_classifier.predict(np.array(image_array))  
    print(prediction)
    if round(prediction[0][0]) == 1:
        return {"response":"real"}
    else:
        return {"response":"fake"}    
    
if __name__ == "__main__":
    uvicorn.run(app,port=8000)    
