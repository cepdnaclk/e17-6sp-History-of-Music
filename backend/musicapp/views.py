from django.shortcuts import redirect, render
from django.core.files.storage import FileSystemStorage
from django.views.generic import TemplateView
# Create your views here.
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import PostSerializer
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
import joblib
import os
import librosa
import numpy as np
import pandas as pd
import os
import csv
import pathlib

class PostView(viewsets.ModelViewSet):
    parser_classes = (MultiPartParser, FormParser)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # permission_classes = (
    #     permissions.IsAuthenticatedOrReadOnly
    # )
    @api_view(['POST'])
    @permission_classes([AllowAny])
    @csrf_exempt
    def post(self, request, *args, **kwargs):
        #cover = request.data['cover']
        title = request.data['title']
        Post.objects.create(title=title)
        return HttpResponse({'message': 'Post created'}, status=200)

    @api_view(['POST'])
    @permission_classes([AllowAny])
    @csrf_exempt
    def upload(request):
        url =''
        context = {}
        print(request.content_type)
        if request.method == 'POST':
            uploaded_file = request.data['file']
            title = request.data['title']
            fs = FileSystemStorage()
            name = fs.save(title, uploaded_file)
            url = fs.url(name)
            #predict(context,name)
            prediction = predict(url)
            return Response(
                {'success': 'Successfully uploaded music file',
                'prediction': prediction,
                'file': title},
                status=status.HTTP_201_CREATED
            )
            #redirect('predict/',kwargs={'url':url})
        if request.method == 'GET':
            return render(request, 'upload.html', context)

def predict(name):
    filename='H Maala Pabalu Wel.mp3'
    songname = f'.{name}'
    y, sr = librosa.load(songname, mono=True, duration=30)
    tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
    rmse = librosa.feature.rms(y=y)
    chroma_stft = librosa.feature.chroma_stft(y=y, sr=sr)
    spec_cent = librosa.feature.spectral_centroid(y=y, sr=sr)
    spec_bw = librosa.feature.spectral_bandwidth(y=y, sr=sr)
    rolloff = librosa.feature.spectral_rolloff(y=y, sr=sr)
    zcr = librosa.feature.zero_crossing_rate(y)
    mfcc = librosa.feature.mfcc(y=y, sr=sr)
    #{np.median(beats)} {np.mean(chroma_stft)} {np.mean(rmse)} {np.mean(spec_cent)} {np.mean(spec_bw)} {np.mean(rolloff)} {np.mean(zcr)}'    
    
    to_pred=list()
    to_pred.append(tempo)
    to_pred.append(np.median(beats))
    to_pred.append(np.mean(chroma_stft))
    to_pred.append(np.mean(rmse))
    to_pred.append(np.mean(spec_cent))
    to_pred.append(np.mean(spec_bw))
    to_pred.append(np.mean(rolloff))
    to_pred.append(np.mean(zcr))
    for e in mfcc:
        to_pred.append(np.mean(e))
    
    model = joblib.load(os.path.join('./models/svm'))
    prediction = model.predict([to_pred])[0]
    # if (prediction == 0) :
    #     predicted_class = 'Iris-setosa'
    # elif (prediction == 1):
    #     predicted_class = 'Iris-versicolor'
    # else:
    #     predicted_class = 'Iris-virginica'
  
    context = {}
    context['genre'] =prediction
    print(prediction)
    return prediction
    