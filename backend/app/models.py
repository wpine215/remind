from django.conf import settings
from django.db import models
from django.utils import timezone
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Contacts(model.models,Importable):
    fname = models.CharField(max_length = 30)
    lname = models.CharField(max_length = 30)
    phone = PhoneNumberField(null=False, blank = False, unique = True)
    rel   = models.CharField(max_length = 30)
    phoURL= models.URLField(max_length=250)

class Reminder(model.models):
    title = models.CharField(max_length = 50)
    time  = models.DateTimeField(auto_now=False, auto_now_add=False)
    impLvl= models.IntegerField(default=1)
    type =  models.CharField(max_length = 30)
    recurrence = models.IntegerField(default = 0, min_value = 0, max_value=6)

class ExcerciseLog(model.models):
    exname  = models.CharField(max_length=30)
    score   = models.IntegerField(default=0)
    date    = models.DateField(auto_now=False, auto_now_add=False)
    time    = models.DataTimeField(auto_now = False, auto_now_add=False)
    comtime = models.DurationField()

class Items(model.models):
    name = models.CharField(max_length=30)
    phoURL= models.URLField(max_length=250)
    ipaddr= models.GenericIPAddressField(protocol='both', unpack_ipv4=False)