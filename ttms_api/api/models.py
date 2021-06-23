from django.db import models

# Create your models here.

class Ticketattachments(models.Model):
    ticketid = models.BigIntegerField()
    filepath = models.CharField(max_length=200, blank=True, null=True)
    filetype = models.CharField(max_length=50, blank=True, null=True)
    filename = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ticketattachments'
    
    def __str__(self):
        return self.id


class Ticketnotes(models.Model):
    id = models.BigAutoField(primary_key=True)
    ticketid = models.BigIntegerField()
    note = models.CharField(max_length=8000)
    user = models.CharField(max_length=30)
    notedate = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'ticketnotes'
    
    def __str__(self):
        return self.id


class Tickets(models.Model):
    id = models.BigAutoField(primary_key=True)
    clientid = models.BigIntegerField(blank=True, null=True)
    user = models.CharField(max_length=30, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    categoryid = models.BigIntegerField()
    subcategoryid = models.BigIntegerField(blank=True, null=True)
    comments = models.CharField(max_length=8000, blank=True, null=True)
    transferyn = models.IntegerField(blank=True, null=True)
    groupid = models.IntegerField(blank=True, null=True)
    opendate = models.DateTimeField()
    parentticketid = models.BigIntegerField(blank=True, null=True)
    assigneduser = models.CharField(max_length=30, blank=True, null=True)
    lastupdate = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tickets'

    def __str__(self):
        return self.id


class Ticketstatus(models.Model):
    id = models.BigAutoField(primary_key=True)
    ticketid = models.BigIntegerField()
    groupid = models.IntegerField()
    notes = models.TextField(db_column='Notes')  # Field name made lowercase.
    status = models.CharField(max_length=50)
    statusdate = models.DateTimeField()
    username = models.CharField(max_length=90)

    class Meta:
        managed = False
        db_table = 'ticketstatus'

    def __str__(self):
        return self.id


class Users(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=128)
    salt = models.CharField(max_length=128)
    email = models.CharField(max_length=255)
    usertype = models.CharField(db_column='UserType', max_length=90)  # Field name made lowercase.
    groupid = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'users'

    def __str__(self):
        return self.username

class Tblreferhistory(models.Model):
    referid = models.AutoField(db_column='ReferID', primary_key=True)  # Field name made lowercase.
    ticketid = models.CharField(max_length=90)
    groupfrom = models.IntegerField(db_column='groupFrom')  # Field name made lowercase.
    groupto = models.IntegerField(db_column='groupTo')  # Field name made lowercase.
    username = models.CharField(max_length=90)
    daterefer = models.DateField()
    notes = models.TextField()

    class Meta:
        managed = False
        db_table = 'tblreferhistory'

    def __str__(self):
        return self.referid

class Subcategories(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)
    categoryid = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'subcategories'

    def __str__(self):
        return self.name


class Eventlog(models.Model):
    id = models.BigAutoField(primary_key=True)
    ticketid = models.BigIntegerField()
    eventdate = models.DateTimeField()
    status = models.CharField(max_length=50, blank=True, null=True)
    clientid = models.BigIntegerField(blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    categoryid = models.BigIntegerField(blank=True, null=True)
    subcategoryid = models.BigIntegerField(blank=True, null=True)
    assigneduser = models.CharField(max_length=30, blank=True, null=True)
    parentticketid = models.BigIntegerField(blank=True, null=True)
    groupid = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'eventlog'

    def __str__(self):
        return self.id


class Groups(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'groups'
    
    def __str__(self):
        return self.name


class Status(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'status'
    
    def __str__(self):
        return self.name

class Categories(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'categories'

    def __str__(self):
        return self.name


class Clients(models.Model):
    id = models.BigAutoField(primary_key=True)
    firstname = models.CharField(max_length=30, blank=True, null=True)
    lastname = models.CharField(max_length=50, blank=True, null=True)
    groupid = models.IntegerField(db_column='groupId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'clients'

    def __str__(self):
        return self.firstname

