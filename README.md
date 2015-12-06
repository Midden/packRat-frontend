#WDI PROJECT 3 FileBucket
Team Turing:
Jeff, Kayla and Edie

#Build a Dropbox-like app that allows users to upload files into a virtual file system. In addition to keeping track of file structure, this app should associate meta-data with each file, including things like:

date created/uploaded date modified owner (person who uploaded the file) tags Reach Goal: Implement a simple permissions system for your CMS:

Ordinary users can only read/download a file. Owners can do anything, and only owners can destroy or move a file. 'collaborators' can be chosen; they have permission to read from and write to files.
packRat is a file storage app.

Given the flexible storage options of Mongodb, the behavior of these furry little critters, seems to reflect the flexibility of document attributes. Packrats, also called woodrats, build complex houses or dens made of twigs, cactus joints, and other materials. These contain several nest chambers, food caches, and debris piles. These debris piles are called Middens, and have been know to preserve materials gathered by the packrats for 50, 000. Packrats also like shiny things and will drop whatever they are carrying for something that they like better.
#User Stories:

The following user stories should be considered our “Active User Stories”, with notes and the group’s plan of execution.
New Visitor

As a new visitor to the site, I can understand what this app does, so I can decide to register As a new visitor to the site, I can register an account, so I can log in. User As a user, I can log in, so I can upload files. As a user, I can log out, so that I am no longer logged in. As a user, I can delete my account.
CRUD:
#C-

As a User, I can upload a file, so I can store it remotely. As a User, I can create a directory to store files, so I can organize my data.
#R-

As a User, I can see the files I uploaded, so I can keep track of my data. As a User, I can see the file structure of my uploads, so I can put new files in a logical place. As a User, I can see when I uploaded a file, so I know whether it needs an update.

 As a User, I can see a file so I can download it ----Def R

#U- Work on this part of the app last!

As a User, I can change a file name, so I can make sure my file names make sense to me. As a User, I can move a file to another directory, so my data structure makes sense to me. As a User, I can change the name of a directory, so I can make sure my directory names make sense to me. Overwriting an existing file might be easier.-- than moving it...Antony wasn’t sure.
#D-

As a User, I can remove/delete a file, so I don’t have to keep file that I don’t need. Leave this until the end...forEach..As a User, I can delete a directory, so I remove multiple connected files that I don’t need.

#Reach Goals:

As a User, I am the only person who can upload or edit my files As a User, I can decide what files are public and private - he said not to even try file sharing between accounts, if anything, we can set-up multiple users for an account, so data is “sharable” within an account. As a User, I can search for files with the tags? title? keyword?
Wednesday Pre-project week meeting with Antony game plan notes:

WDI Express Multer lesson is the framework for the express apps...Materialized Paths are the way to go for setting up queries...he’s written materialized paths in Postgresql, and he said he’d help us step through it, once we get to the point where we are writing query commands.

#Suggested problem to solve first:  Last Updated Sunday, December 6th, 3:30pm.
DONE - Create the bones of the app...express...mongo etc...
DONE -Create user account
NO DIRCETORY NEEDED - create-creating a directory -materialized paths
DONE -Creating and uploading a file referenced and accessibly by userName -materialized paths
DONE -read-querying for that file -materialized paths
DONE -delete-removing the file from directory -we need to set up AWS permissions a little differently than his example -  we need to add a remove permission.
REACH GOAL-create-creating another directory
REACH GOAL- Update - moving a file from the first directory into that directory…
NEED-update-renaming directories/files
 REACH GOALread-creating a directory within a directory and searching for documents within that directory from the root.
multiple users on one account.
 DONE-delete-remove whole directories - he suggested this to be last, because it involves a lot more manipulation with AWS and it make our db messy, so get the thing working and then make it messy.

How the parts work together

Express App handles the functionality/interpretation of query meoths of the stuff coming from and going to database - MongoDB stores descriptions/details/structure for files that are actually being stored in AWS. ---- We only get 5GB of storage on AWS, so we can’t store big sample data...even though MongoDB can handle documents up to 16GB size...might be worth commenting about in readME.

https://github.com/Midden/packRat-frontend

resources Scott, Dave, Lena you need to NPM install use express multer use express passport


# packRat-frontend
The README.md file inside your front-end repo should have:
A short description of your application.
A brief explanation of the technologies (Node modules, Express middleware etc) used.
A couple of paragraphs detailing the general approach you took.
Notes on any unsolved problems or major hurdles your team had to overcome.
Installation instructions for any dependencies.


#User Stories


A link to your user stories – who are your users, what do they want, and why?
A link to your ERD - what data models does your app use?
#Wireframes – sketches of major views / interfaces in your application.

Wireframes

Functionality Outline for landing page:

![copy of packrat_landingview](https://cloud.githubusercontent.com/assets/14185415/11615328/98eb343e-9c2b-11e5-88d9-63889491a146.jpg)

Logged in Functionality

![packrat_view_logged_in](https://cloud.githubusercontent.com/assets/14185415/11615368/9cb7faa6-9c2c-11e5-8e38-80b8ec15228e.jpg)


Under the Hood in Mongo DB

![materialized paths](https://cloud.githubusercontent.com/assets/14185415/11615346/1b757586-9c2c-11e5-99a0-1da34205379d.jpg)


Workflow Action Plan
![FileBucket.pdf](https://github.com/Midden/packRat-frontend/files/53267/FileBucket.pdf)





A link to the deployed front-end app.


link to the  back-end repo:
https://github.com/Midden/packRat-backend2
