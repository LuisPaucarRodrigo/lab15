
from fastapi import FastAPI
import requests

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/whatsapp")
def mensaje(celular:str,mensaje:str):
    cel = '51'+celular
    cadenaJson={
        "app": {
    "id": "51923098157",
    "time": "1656375501",
    "data": {
      "recipient": {
        "id":cel
      },
      "message": [
        {
          "time": "1656375501",
          "type": "text",
          "value": mensaje
        }
      ]
    }
  }
    }
    res = requests.post('https://whapi.io/api/send',json=cadenaJson)
    return res.text