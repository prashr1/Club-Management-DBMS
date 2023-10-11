from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext as _

class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """

    def create_user(self, email,username,city, password=None):
        if not email:
            raise ValueError(_('Must have an email address'))
        if not username:
            raise ValueError(_('Must have a username'))
        # 
        user = self.model(city=city,username=username,email = self.normalize_email(email), )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,username,email, city,password=None):
        user=self.create_user(city=city,username=username,email = self.normalize_email(email), password=password,)
        user.is_staff=True
        user.is_superuser=True
        user.is_admin= True
        user.save(using=self._db)
        return user