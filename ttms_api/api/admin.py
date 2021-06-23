from django.contrib import admin
from .models import Ticketattachments
from .models import Clients
from .models import Categories
from .models import Status
from .models import Groups
from .models import Eventlog
from .models import Subcategories
from .models import Tblreferhistory
from .models import Users
from .models import Ticketstatus
from .models import Tickets
from .models import Ticketnotes



# Register your models here.

admin.site.register(Ticketattachments)

class ClientAdmin(admin.ModelAdmin):
    list_display = ['id' , 'firstname' , 'lastname']

admin.site.register(Clients , ClientAdmin)

admin.site.register(Categories)

admin.site.register(Status)

admin.site.register(Groups)

admin.site.register(Eventlog)

admin.site.register(Subcategories)

admin.site.register(Tblreferhistory)

admin.site.register(Users)

admin.site.register(Ticketstatus)

admin.site.register(Tickets)

admin.site.register(Ticketnotes)

