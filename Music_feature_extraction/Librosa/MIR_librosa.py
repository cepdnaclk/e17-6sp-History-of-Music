import librosa
import numpy as np
import pandas as pd
import os
import csv
import pathlib

header = 'filename tempo beats chroma_stft rmse spectral_centroid spectral_bandwidth rolloff zero_crossing_rate'
for i in range(1, 21):
    header += f' mfcc{i}'
header += ' label'
header = header.split()

file = open('/content/sample_data/my_csv.csv', 'w', newline='')
with file:
    writer = csv.writer(file)
    writer.writerow(header)

for filename in os.listdir(f'/content/drive/MyDrive/Semester6_project_group12/songs'):
    songname = f'/content/drive/MyDrive/Semester6_project_group12/songs/{filename}'
    
    if len(filename.split())>1:
      name =''
      for word in filename.split():
        name+=('_'+word)
      
      filename=name
    y, sr = librosa.load(songname, mono=True, duration=30)
    tempo, beats = librosa.beat.beat_track(y=y, sr=sr)
    rmse = librosa.feature.rms(y=y)
    chroma_stft = librosa.feature.chroma_stft(y=y, sr=sr)
    spec_cent = librosa.feature.spectral_centroid(y=y, sr=sr)
    spec_bw = librosa.feature.spectral_bandwidth(y=y, sr=sr)
    rolloff = librosa.feature.spectral_rolloff(y=y, sr=sr)
    zcr = librosa.feature.zero_crossing_rate(y)
    mfcc = librosa.feature.mfcc(y=y, sr=sr)
    to_append = f'{filename} {tempo} {np.median(beats)} {np.mean(chroma_stft)} {np.mean(rmse)} {np.mean(spec_cent)} {np.mean(spec_bw)} {np.mean(rolloff)} {np.mean(zcr)}'    
    for e in mfcc:
        to_append += f' {np.mean(e)}'
    
    file = open('/content/sample_data/my_csv.csv', 'a', newline='')
    with file:
        writer = csv.writer(file)
        writer.writerow(to_append.split())

df=pd.read_csv('/content/sample_data/my_csv.csv', on_bad_lines='skip')
df.head()
