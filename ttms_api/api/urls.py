from django.urls import path
from . import views


urlpatterns = [
    path('ticket-list/', views.showAll, name='ticket-list'),
    path('ticket-view/<int:pk>', views.ViewTicket, name='ticket-view'),
    path('ticket-category/', views.AddCategory, name='ticket-category'),
    path('ticket-update/<int:pk>', views.UpdateProblem, name='ticket-update'),
    path('ticket-delete/<int:pk>', views.DeleteProblem, name='ticket-delete'),
]