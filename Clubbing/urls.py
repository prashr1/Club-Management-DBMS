"""Clubbing URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    # path('', views.showClub, name="showClub"),
    
    path('', views.index.as_view(),name="mainpage"),
    path("register", views.RegisterClub.as_view(), name="register"),
    path("login", views.loginClub.as_view(), name="login"),
    path("logout", views.logoutClub.as_view(), name="logout"),

    path('show_user', views.showUser.as_view(),name="showUser"),
    path('show_emp', views.showemp.as_view(),name="showemp"),
    path('show_event', views.showevent.as_view(),name="showevent"),

    # path('show_user/show_userbookings/<int:id>',views.showUserBookings,name="showUserBookings"),
    # path('show_event/show_eventbookings/<int:id>',views.showEventBookings,name="showEventBookings"),

    path('show_user/Create',views.createUser.as_view(),name="createUser"),
    path('show_emp/Create',views.createEmp.as_view(),name="createEmp"),
    path('show_event/Create',views.createEvent.as_view(),name="createEvent"),

    path('show_user/Update/<int:id>',views.updateUser.as_view(),name="updateUser"),
    path('show_emp/Update/<int:id>',views.updateEmp.as_view(),name="updateEmp"),
    path('show_event/Update/<int:id>',views.updateEvent.as_view(),name="updateEvent"),

    path('show_user/Delete/<int:id>',views.deleteUser.as_view(),name="deleteUser"),
    path('show_emp/Delete/<int:id>',views.deleteEmp.as_view(),name="deleteEmp"),
    path('show_event/Delete/<int:id>',views.deleteEvent.as_view(),name="deleteEvent"),
]
