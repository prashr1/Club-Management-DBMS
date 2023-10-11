from django.core.exceptions import ValidationError
from django.shortcuts import render
from django.shortcuts import HttpResponse,redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication
from rest_framework.serializers import Serializer
from .serializer import ClubLoginSerializer, ClubRegisterSerializer, ClubSerializer, UserSerializer, EmpSerializer, EventSerializer
from Clubbing.models import userModel,eventModel,empModel,clubModel,bookModel
from django.contrib import messages
from django.contrib.auth import authenticate,logout,login
# from .forms import CustomClubCreationForm,Userforms
from django.db.models import Max
from .validations import custom_validation, validate_email, validate_password
from rest_framework import permissions, status

# @api_view(['GET'])
# def getRoutes(request):

#     routes = [
#         {
#             'Endpoint': '/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the index(home) page'
#         },
#         {
#             'Endpoint': '/register',
#             'method': 'POST',
#             'body': None,
#             'description': 'Returns the register page'
#         },
#         {
#             'Endpoint': '/login',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the login page'
#         },
#         {
#             'Endpoint': '/show_user/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the user page'
#         },
#         {
#             'Endpoint': '/show_emp/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the emp page'
#         },
#         {
#             'Endpoint': '/show_event/',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the event page'
#         },
#         {
#             'Endpoint': 'show_user/show_userbookings/<int:id>',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns a single note object'
#         },
#         {
#             'Endpoint': '/notes/create/',
#             'method': 'POST',
#             'body': {'body': ""},
#             'description': 'Creates new note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/update/',
#             'method': 'PUT',
#             'body': {'body': ""},
#             'description': 'Creates an existing note with data sent in post request'
#         },
#         {
#             'Endpoint': '/notes/id/delete/',
#             'method': 'DELETE',
#             'body': None,
#             'description': 'Deletes and exiting note'
#         },
#         {
#             'Endpoint': '/about',
#             'method': 'GET',
#             'body': None,
#             'description': 'Returns the about page'
#         }
#     ]
#     return Response(routes)


# @api_view(['GET'])
class index(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def get(self,request):
        serializer = ClubSerializer(request.user)
        return Response({'club': serializer.data}, status=status.HTTP_200_OK)


# @api_view(['POST'])
class RegisterClub(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self,request):
        clean_data = custom_validation(request.data)
        serializer = ClubRegisterSerializer(data=clean_data)
        # raise ValidationError(clean_data)
        if serializer.is_valid(raise_exception=True):
            # raise ValidationError(serializer.errors)
            club = serializer.create(clean_data)
            if club:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        # raise ValidationError(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)


    # form=CustomClubCreationForm()

    # if request.method=='POST':
    #     form=CustomClubCreationForm(request.POST)
    #     if form.is_valid():
    #         club_name=form.cleaned_data.get('username')
    #         city=form.cleaned_data.get('city')
    #         email=form.cleaned_data.get('email')
    #         form.save()
    #         saverecord=clubModel(club_id=1 if clubModel.objects.count()==0 else clubModel.objects.aggregate(max=Max('club_id'))['max']+1,
    #         club_name=club_name,
    #         city=city,
    #         club_email=email)
    #         saverecord.save()
    #         messages.success(request,'Account was created for Club Name:' + club_name + ' with Email ID:' + email)

    #         return redirect('login')
    # context={
    #     'form':form
    # }
    # return render(request,'register.html',context)


# @api_view(['POST'])
class loginClub(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,) 
    def post(self,request):   
        data = request.data
        # assert validate_email(data)
        # assert validate_password(data)
        serializer = ClubLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            club = serializer.check_club(data)
            login(request, club)
            return Response(serializer.data, status=status.HTTP_200_OK)


    # if request.method=="POST":
    #     username = request.POST.get('username')
    #     password = request.POST.get('password')
    #     user = authenticate(username=username, password=password)
    #     if user is not None:
    #         login(request, user)
    #         return redirect("/")
    #     else:
    #         messages.info(request,'Club ID or password is Incorrect')
    #         return render(request,'login.html')
    # return render(request,'login.html')

# @api_view(['POST'])
class logoutClub(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()
    def post(self,request): 
        logout(request)
        return Response(status=status.HTTP_200_OK)

# @api_view(['GET'])
class showUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def get(self,request):
        if request.method=="GET":
            user=userModel.objects.all()
            serializer=UserSerializer(user, many=True)
            return Response(serializer.data)
    # if request.method=="POST" and 'submit1' in request.POST and request.user.is_superuser:
    #     if request.POST.get('club_id') and request.POST.get('u_name') and request.POST.get('age') and request.POST.get('contact') and request.POST.get('address'):
    #         saverecord=userModel(u_id=1 if userModel.objects.count()==0 else userModel.objects.aggregate(max=Max('u_id'))['max']+1,
    #             club_id=request.POST.get('club_id'),
    #             u_name=request.POST.get('u_name'),
    #             age=request.POST.get('age'),
    #             contact=request.POST.get('contact'),
    #             address=request.POST.get('address'))
    #         saverecord.save()
    #         messages.success(request,'User created successfully')
    # elif request.method=="POST" and 'submit1' in request.POST:
    #     if request.POST.get('u_name') and request.POST.get('age') and request.POST.get('contact') and request.POST.get('address'):
    #         saverecord=userModel(u_id=1 if userModel.objects.count()==0 else userModel.objects.aggregate(max=Max('u_id'))['max']+1,
    #             club_id=clubModel.objects.get(club_email=request.user.email),
    #             u_name=request.POST.get('u_name'),
    #             age=request.POST.get('age'),
    #             contact=request.POST.get('contact'),
    #             address=request.POST.get('address'))
    #         saverecord.save()
    #         messages.success(request,'User created successfully')
    # elif request.method=="POST" and 'submit2' in request.POST:
    #     delUser=userModel.objects.filter(u_id=request.POST.get('u_id'))
    #     if delUser:
    #         delUser.delete()
    #         messages.success(request,'User deleted successfully')
    #     else:
    #         messages.success(request,'User ID does not exist')

    # if request.user.is_superuser:
    #     showall=userModel.objects.all()
    #     context={
    #         "data":showall
    #         }
    #     return render(request, 'show_user1.html', context)
    # else:
    #     showall=userModel.objects.filter(club_id=clubModel.objects.get(club_email=request.user.email))
    #     context={
    #         "data":showall
    #         }
    #     return render(request, 'show_user.html', context)

# @api_view(['POST'])
class createUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def post(self,request):
        data = request.data
        user = userModel.objects.create(
        u_id=1 if userModel.objects.count()==0 else userModel.objects.aggregate(max=Max('u_id'))['max']+1,
        # club_id = 1,
        u_name = data['u_name'],
        age = data['age'],
        contact = data['contact'],
        address = data['address']
        )
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)

# @api_view(['POST'])
class createEmp(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def post(self,request):
        data = request.data
        emp = empModel.objects.create(
        e_id=1 if empModel.objects.count()==0 else empModel.objects.aggregate(max=Max('e_id'))['max']+1,
        # club_id = 1,
        e_name = data['e_name'],
        department = data['department'],
        e_contact = data['e_contact'],
        join_date = data['join_date']
        )
        serializer = EmpSerializer(emp, many=False)
        return Response(serializer.data)

# @api_view(['POST'])
class createEvent(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def psot(self,request):
        data = request.data
        event = eventModel.objects.create(
        event_id=1 if eventModel.objects.count()==0 else eventModel.objects.aggregate(max=Max('event_id'))['max']+1,
        # club_id = 1,
        capacity = data['capacity'],
        time = data['time'],
        total_duration = data['total_duration'],
        date = data['date']
        )
        serializer = EventSerializer(event, many=False)
        return Response(serializer.data)


# @api_view(['PUT'])
class updateUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def put(self,request,id):
        data = request.data
        user = userModel.objects.get(u_id=id)
        serializer = UserSerializer(instance=user, data=data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


# @api_view(['DELETE'])
class deleteUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def delete(self,request,id):
        user = userModel.objects.get(u_id=id)
        user.delete()
        return Response('User was deleted!')

# @api_view(['DELETE'])
class deleteEmp(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def delete(self,request,id):
        emp = empModel.objects.get(e_id=id)
        emp.delete()
        return Response('Emp was deleted!')

# @api_view(['DELETE'])
class deleteEvent(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def delete(self,request,id):
        event = eventModel.objects.get(event_id=id)
        event.delete()
        return Response('Event was deleted!')

# @api_view(['PUT'])
class updateEmp(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def put(self,request,id):
        data = request.data
        emp = empModel.objects.get(e_id=id)
        serializer = EmpSerializer(instance=emp, data=data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)


# @api_view(['PUT'])
class updateEvent(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def put(self,request,id):
        data = request.data
        event = eventModel.objects.get(event_id=id)
        serializer = EventSerializer(instance=event, data=data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)



# @api_view(['GET'])
class showemp(APIView):
     def get(self,request):
        permission_classes = (permissions.IsAuthenticated,)
        authentication_classes = (SessionAuthentication,)
        if request.method=="GET":
            user=empModel.objects.all()
            serializer=EmpSerializer(user, many=True)
            return Response(serializer.data)
    # if request.method=="POST":
    #     if request.POST.get('e_name') and request.POST.get('department') and request.POST.get('e_contact') and request.POST.get('join_date'):
    #         saverecord=empModel(e_id=1 if empModel.objects.count()==0 else empModel.objects.aggregate(max=Max('e_id'))['max']+1,
    #             club_id=clubModel.objects.get(club_email=request.user.email),
    #             e_name=request.POST.get('e_name'),
    #             department=request.POST.get('department'),
    #             e_contact=request.POST.get('e_contact'),
    #             join_date=request.POST.get('join_date'))
    #         saverecord.save()
    #         messages.success(request,'Employee created successfully')
    # elif request.method=="POST" and 'submit2' in request.POST:
    #     delEmp=empModel.objects.filter(e_id=request.POST.get('e_id'))
    #     if delEmp:
    #         delEmp.delete()
    #         messages.success(request,'Employee deleted successfully')
    #     else:
    #         messages.success(request,'Employee ID does not exist')
    # showall=empModel.objects.filter(club_id=clubModel.objects.get(club_email=request.user.email))
    # context={
    #     "data":showall
    #     }
    # return render(request, 'show_emp.html', context)

# @api_view(['GET'])
class showevent(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    def get(self,request):
        if request.method=="GET":
            user=eventModel.objects.all()
            serializer=EventSerializer(user, many=True)
            return Response(serializer.data)
    # if request.method=="POST":
    #     if request.POST.get('capacity') and request.POST.get('time') and request.POST.get('total_duration') and request.POST.get('date'):
    #         saverecord=eventModel(event_id=1 if eventModel.objects.count()==0 else eventModel.objects.aggregate(max=Max('event_id'))['max']+1,
    #             club_id=clubModel.objects.get(club_email=request.user.email),
    #             capacity=request.POST.get('capacity'),
    #             time=request.POST.get('time'),
    #             total_duration=request.POST.get('total_duration'),
    #             date=request.POST.get('date'))
    #         saverecord.save()
    #         messages.success(request,'Event created successfully')
    # elif request.method=="POST" and 'submit2' in request.POST:
    #     delEvent=eventModel.objects.filter(event_id=request.POST.get('event_id'))
    #     if delEvent:
    #         delEvent.delete()
    #         messages.success(request,'Event deleted successfully')
    #     else:
    #         messages.success(request,'Event ID does not exist')
    
    # showall=eventModel.objects.filter(club_id=clubModel.objects.get(club_email=request.user.email))
    # context={
    #     "data":showall
    #     }
    # return render(request, 'show_event.html', context)

# def showUserBookings(request,id):
#     if request.method=="POST":
#         if request.POST.get('booking_date') and request.POST.get('event_id') and request.POST.get('booking_mode'):
#             if eventModel.objects.filter(event_id=request.POST.get('event_id')):
#                 saverecord=bookModel(booking_id=1 if bookModel.objects.count()==0 else bookModel.objects.aggregate(max=Max('booking_id'))['max']+1,
#                     u_id=userModel.objects.get(u_id=id),
#                     booking_date=request.POST.get('booking_date'),
#                     event_id=eventModel.objects.get(event_id=request.POST.get('event_id')),
#                     booking_mode=request.POST.get('booking_mode'))
#                 saverecord.save()
#                 messages.success(request,"User's Booking created successfully")
#             else:
#                 messages.success(request,"This Event ID does not exist")
#     elif request.method=="POST" and 'submit2' in request.POST:
#         delBook=bookModel.objects.filter(booking_id=request.POST.get('booking_id'))
#         if delBook:
#             delBook.delete()
#             messages.success(request,"User's Booking deleted successfully")
#         else:
#             messages.success(request,'User ID does not exist')
    
#     showall=bookModel.objects.filter(u_id=id)
#     context={
#         "data":showall,
#         "id":id
#         # 'showuserobj':showuserobj
#     }
#     return render(request, 'show_userbookings.html', context)

# def showEventBookings(request,id):
#     if request.method=="POST":
#         if request.POST.get('booking_date') and request.POST.get('u_id') and request.POST.get('booking_mode'):
#             if userModel.objects.filter(u_id=request.POST.get('u_id')):
#                 saverecord=userModel(booking_id=1 if bookModel.objects.count()==0 else bookModel.objects.aggregate(max=Max('booking_id'))['max']+1,
#                 u_id=userModel.objects.get(u_id=request.POST.get('u_id')),
#                 booking_date=request.POST.get('booking_date'),
#                 event_id=eventModel.objects.get(event_id=id),
#                 booking_mode=request.POST.get('booking_mode'))
#                 saverecord.save()
#                 messages.success(request,"Event's Booking created successfully")
#             else:
#                 messages.success(request,"This User ID does not exist")
#     elif request.method=="POST" and 'submit2' in request.POST:
#         delBook=bookModel.objects.filter(booking_id=request.POST.get('booking_id'))
#         if delBook:
#             delBook.delete()
#             messages.success(request,"Event's Booking deleted successfully")
#         else:
#             messages.success(request,'Booking ID does not exist')
    
#     showall=bookModel.objects.filter(event_id=id)
#     context={
#         "data":showall
#         # 'showuserobj':showuserobj
#     }
#     return render(request, 'show_eventbookings.html', context)


    