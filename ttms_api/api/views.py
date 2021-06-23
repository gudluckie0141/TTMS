from django.http import request
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view
 
from .serializers import TicketsSerializer
from .serializers import CategoriesSerializer
from .models import Tickets

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        "List": "/ticket-list/",
        "View Ticket": "/ticket-list/<int:id>",
        "Feedback": "/ticket-list/<int:id>/feedback",
        "Add Category": "/ticket-category/",
        "Add Subcategory": "/ticket-subcategory/",
        "Add Problem": "/ticket-problem/",
        "Update Problem": "/ticket-update/<int:id>",
        "Delete Problem": "/ticket-delete/<int:id>",
        "Message": "/message/",
        "Profile" : "/profile",
        "Update Profile": "/profile/<int:id>",
    }

    return Response(api_urls);

@api_view(["GET"])
def showAll(request):
    ticket = Tickets.objects.all()
    serializer = TicketsSerializer(ticket, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def ViewTicket(request, pk):
    ticket = Tickets.objects.get(id=pk)
    serializer = TicketsSerializer(ticket, many=False)
    return Response(serializer.data)


@api_view(["POST"])
def AddCategory(request):
    serializer = CategoriesSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["POST"])
def UpdateProblem(request, pk):
    ticket = Tickets.objects.get(id=pk)
    serializer = TicketsSerializer(instance=ticket, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["GET"])
def DeleteProblem(request, pk):
    ticket = Tickets.objects.get(id=pk)
    ticket.delete()

    return Response("Items deleted successful")