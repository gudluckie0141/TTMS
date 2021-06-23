# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Categories(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'categories'


class Clients(models.Model):
    id = models.BigAutoField(primary_key=True)
    firstname = models.CharField(max_length=30, blank=True, null=True)
    lastname = models.CharField(max_length=50, blank=True, null=True)
    groupid = models.IntegerField(db_column='groupId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'clients'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


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


class Groups(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'groups'


class Status(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'status'


class Subcategories(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)
    categoryid = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'subcategories'


class System(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    value = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'system'


class Systemlanguage(models.Model):
    language = models.CharField(max_length=255, blank=True, null=True)
    keyword = models.CharField(max_length=255, blank=True, null=True)
    value = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'systemlanguage'


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


class Ticketattachments(models.Model):
    ticketid = models.BigIntegerField()
    filepath = models.CharField(max_length=200, blank=True, null=True)
    filetype = models.CharField(max_length=50, blank=True, null=True)
    filename = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ticketattachments'


class Ticketnotes(models.Model):
    id = models.BigAutoField(primary_key=True)
    ticketid = models.BigIntegerField()
    note = models.CharField(max_length=8000)
    user = models.CharField(max_length=30)
    notedate = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'ticketnotes'


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
