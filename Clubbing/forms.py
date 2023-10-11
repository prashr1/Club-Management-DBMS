from django import forms
from Clubbing.models import userModel
from django.contrib.auth.forms import UserCreationForm,UserChangeForm

# class CustomClubCreationForm(UserCreationForm):

#     class Meta:
#         model = Account
#         fields = ('city','username','email')

# class CustomClubChangeForm(UserChangeForm):

#     class Meta:
#         model = Account
#         fields = ('city','username','email')

# class Userforms(UserCreationForm):
#     class Meta:
#         model=userModel
#         fields=('u_name','age','contact','address')
