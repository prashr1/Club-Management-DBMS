from django.db import models
from django.utils.translation import gettext as _
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import CustomUserManager

# Create your models here.

# class Account(AbstractBaseUser):
#     city=models.CharField(max_length=100)
#     username=models.CharField(max_length=100)
#     email=models.EmailField(verbose_name="email",max_length=60,unique=True)
#     is_active=models.BooleanField(default=True)
#     is_staff=models.BooleanField(default=False)
#     is_admin=models.BooleanField(default=False)
#     is_superuser=models.BooleanField(default=False)

#     objects=CustomUserManager()

#     USERNAME_FIELD="email"
#     REQUIRED_FIELDS=["username","city"]
#     def __str__(self):
#         return self.username

#     def has_perm(self,perm,obj=None):
#         return self.is_admin

#     def has_module_perms(self,app_level):
#         return True

class clubModelManager(BaseUserManager):
    def create_club(self, club_email,club_name,city, password=None):
        if not club_email:
            raise ValueError('An email is required.')
        if not club_name:
            raise ValueError('An club name is required.')
        if not city:
            raise ValueError('An city is required.')
        if not password:
            raise ValueError('A password is required.')
        # club_name = club_name
        # city = city
        club = self.model(club_email=club_email)
        club.club_email = self.normalize_email(club_email)
        club.club_name= club_name
        club.city= city
        club.set_password(password)
        club.is_superuser = True
        club.save()
        return club
    def create_superuser(self, club_email,club_name,city, password=None):
        if not club_email:
            raise ValueError('An email is required.')
        if not club_name:
            raise ValueError('An club name is required.')
        if not city:
            raise ValueError('An city is required.')
        if not password:
            raise ValueError('A password is required.')
        club_email = self.normalize_email(club_email)
        # club_name = club_name
        # city = city
        club = self.model(club_email=club_email)
        club.is_superuser = True
        club.club_name= club_name
        club.city= city
        club.is_admin = True
        club.is_staff = True
        club.set_password(password)
        club.save()
        return club


class clubModel(AbstractBaseUser, PermissionsMixin):
    club_id = models.AutoField(primary_key=True)
    club_name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    club_email=models.CharField(max_length=100, unique=True)
    is_active=models.BooleanField(default=True)
    is_staff=models.BooleanField(default=False)
    is_admin=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)
    USERNAME_FIELD = 'club_email'
    REQUIRED_FIELDS = ['club_name','city']
    objects = clubModelManager()
    def __str__(self):
        return self.club_name
    # class Meta:
    #     db_table="Club"

    def has_perm(self,perm,obj=None):
        return self.is_admin

    def has_module_perms(self,app_level):
        return True
      

# class clubModel(models.Model):
#     club_id = models.AutoField(primary_key=True)
#     club_name = models.CharField(max_length=100)
#     city = models.CharField(max_length=100)
#     club_email=models.CharField(max_length=100, unique=True)
#     def __str__(self):
#         return self.club_name
#     class Meta:
#         db_table="Club"

class userModel(models.Model):
    u_id = models.IntegerField(primary_key=True)
    club_id = models.ForeignKey(clubModel, on_delete=models.CASCADE,null=True)
    u_name = models.CharField(max_length=100)
    age = models.IntegerField()
    contact = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    def __str__(self):
        return self.u_name
    class Meta:
        db_table="User"

class empModel(models.Model):
    e_id = models.IntegerField(primary_key=True)
    e_name = models.CharField(max_length=100)
    department = models.CharField(max_length=50)
    club_id = models.ForeignKey(clubModel, on_delete=models.CASCADE,null=True)
    e_contact = models.IntegerField()
    join_date = models.CharField(max_length=20)
    def __str__(self):
        return self.e_name
    class Meta:
        db_table="Employee"

class eventModel(models.Model):
    event_id = models.IntegerField(primary_key=True)
    club_id = models.ForeignKey(clubModel, on_delete=models.CASCADE,null=True) 
    capacity = models.IntegerField()
    time = models.CharField(max_length=100) 
    total_duration = models.IntegerField()
    date = models.CharField(max_length=20)
    def __int__(self):
        return self.event_id
    class Meta:
        db_table="Event"

class bookModel(models.Model):
    booking_id  = models.IntegerField(primary_key=True)
    booking_date  = models.CharField(max_length=100)
    booking_mode  = models.CharField(max_length=100)
    event_id = models.ForeignKey(eventModel, on_delete=models.CASCADE,null=True) 
    u_id  = models.ForeignKey(userModel, on_delete=models.CASCADE,null=True)
    def __int__(self):
        return self.booking_id
    class Meta:
        db_table="Booking"