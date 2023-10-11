from Clubbing.models import clubModel
from django.core.exceptions import ValidationError

def custom_validation(data):
    club_email = data['club_email'].strip()
    club_name = data['club_name'].strip()
    city = data['city'].strip()
    # password = data['password'].strip()
    password = data['password'].strip()
    if not club_email or clubModel.objects.filter(club_email=club_email).exists():
        raise ValidationError('choose another email')
    
    if not club_name:
        raise ValidationError('Enter Club Name')
    
    if not city:
        raise ValidationError('Enter a City')
    
    if not password:
        raise ValidationError('Enter a Password')
    #
    # if not password1 or not password2 or not password1==password2:
    #     raise ValidationError('Re-enter Password')
    return data


def validate_email(data):
    club_email = data['club_email'].strip()
    if not club_email:
        raise ValidationError('An email is needed')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('A password is needed')
    return True