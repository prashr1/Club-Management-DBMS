from django.forms import ValidationError
from rest_framework.serializers import ModelSerializer, Serializer,EmailField,CharField
from Clubbing.models import userModel,eventModel,empModel,clubModel,bookModel
from django.contrib.auth import  authenticate

class ClubRegisterSerializer(ModelSerializer):
	class Meta:
		model = clubModel
		fields = '__all__'
	def create(self, clean_data):
		club_obj = clubModel.objects.create_club(club_email=clean_data['club_email'],club_name=clean_data['club_name'],city=clean_data['city'], password=clean_data['password'])
		club_obj.save()
		return club_obj

class ClubLoginSerializer(Serializer):
	club_email = EmailField()
	password = CharField()
	##
	def check_club(self, clean_data):
		club = authenticate(club_email=clean_data['club_email'], password=clean_data['password'])
		if not club:
			raise ValidationError('user not found')
		return club

class ClubSerializer(ModelSerializer):
	class Meta:
		model = clubModel
		fields = ('club_email', 'city', 'club_name' )
		
class UserSerializer(ModelSerializer):
    class Meta:
        model = userModel
        fields = '__all__'

class EmpSerializer(ModelSerializer):
    class Meta:
        model = empModel
        fields = '__all__'

class EventSerializer(ModelSerializer):
    class Meta:
        model = eventModel
        fields = '__all__'