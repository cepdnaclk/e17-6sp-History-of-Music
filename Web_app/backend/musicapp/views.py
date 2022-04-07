from django.shortcuts import render
from django.core.files.storage import FileSystemStorage
# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import PostSerializer
from rest_framework import permissions
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse


class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly
    )
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @csrf_exempt
    def my_view(request):
        if request.method == 'POST' and request.FILES['upload']:
            upload = request.FILES['upload']
            fss = FileSystemStorage()
            file = fss.save(upload.name, upload)
            file_url = fss.url(file)
            
        return HttpResponse(request.POST)
        
# class GetImagesView(APIView):
#     def get(self, request, format=None):
#         if Image.objects.all().exists():
#             images = Image.objects.all()
#             images = ImageSerializer(images, many=True)

#             return Response(
#                 {'images': images.data},
#                 status=status.HTTP_200_OK
#             )
#         else:
#             return Response(
#                 {'error': 'No images found'},
#                 status=status.HTTP_404_NOT_FOUND
#             )


# class ImageUploadView(APIView):
#     def post(self, request):
#         try:
#             data = self.request.data

#             image = data['image']
#             alt_text = data['alt_text']

#             Image.objects.create(
#                 image=image,
#                 alt=alt_text
#             )

#             return Response(
#                 {'success': 'Successfully uploaded image'},
#                 status=status.HTTP_201_CREATED
#             )
#         except:
#             return Response(
#                 {'error': 'Something went wrong when uploading image'},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )