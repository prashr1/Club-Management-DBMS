from django.contrib import admin
from Clubbing.models import clubModel,userModel,empModel,eventModel,bookModel
from django.contrib.auth.admin import UserAdmin
# from .forms import CustomClubCreationForm, CustomClubChangeForm
# Register your models here.

# class AccountAdmin(UserAdmin):
#   list_display = (
#     'city','username','email','is_staff','is_admin'
#   )
#   search_fields=(
#     'city','email','username'
#   )
#   readonly_fields=(
#     'id',
#   )
#   filter_horizontal=()
#   list_filter=()
#   fieldsets=()

# admin.site.register(Account,AccountAdmin)

# class CustomClubAdmin(UserAdmin):
#     add_form = CustomClubCreationForm
#     form = CustomClubChangeForm

#     model = clubModel
#     list_display = ('club_id','club_name','city','club_email', 'is_active',
#                     'is_staff', 'is_superuser',)
#     list_filter = ('is_active', 'is_staff', 'is_superuser')
#     fieldsets = (
#         (None, {'fields': ('club_id','club_name','city','club_email','password')}),
#         ('Permissions', {'fields': ('is_staff', 'is_active',
#          'is_superuser', 'groups', 'user_permissions')})
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('club_id','club_name','city','club_email','password1','password2', 'is_staff', 'is_active')}
#          ),
#     )
#     search_fields = ('email',)
#     ordering = ('email',)

admin.site.register(clubModel)

# class userModelAdmin(admin.ModelAdmin):
#   list_display = [
#     "u_id",
#     "club_id",
#     "u_name",
#     "age",
#     "contact",
#     "address",
#   ]
admin.site.register(userModel)


# class empModelAdmin(admin.ModelAdmin):
#   list_display = [
#     "e_id",
#     "e_name",
#     "department",
#     "club_id",
#     "e_contact",
#     "join_date",
#   ]
admin.site.register(empModel)


# class eventModelAdmin(admin.ModelAdmin):
#   list_display = [
#     "event_id",
#     "club_id",
#     "capacity",
#     "time",
#     "total_duration",
#     "date",
#   ]
admin.site.register(eventModel)


# class bookModelAdmin(admin.ModelAdmin):
#   list_display = [
#     "booking_id",
#     "booking_date",
#     "booking_mode",
#     "event_id", 
#     "u_id",
#   ]
admin.site.register(bookModel)
