from instagramy import InstagramUser
user = InstagramUser("instagram")
 
# printing the basic details like
# followers, following, bio
print(user.is_private)
print(user.is_verified)
print(user.number_of_followers)
print(user.profile_picture_url)
 
# return list of dicts
posts = user.posts

print('\n\nLikes', 'Comments')
for post in posts:
    likes = post.likes
    comments = post.comments
    print(likes,comments)