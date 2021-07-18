from instagramy import InstagramUser

def user_info(username):
    try:
        user = InstagramUser(username, sessionid='5874190559%3AyyzNE1LMHGh8oi%3A5')
        if user.is_private:
            return "Enter username of a public account!"
        else:
            # print(user.number_of_followers)
            # print(user.profile_picture_url)

            data = {}
            data["user_name"] = user.username
            data["profile_picture_url"] = user.profile_picture_url
            data["followers"] = user.number_of_followers

            posts = user.posts
            posts[:10]
            likes = comments = 0

            # print('\n\nLikes', 'Comments')
            for post in posts:
                likes += post.likes
                comments += post.comments
                # print(likes,comments)
            data["likes"] = likes
            data["comments"] = comments
            return data
    except:
        return "Username does not exist!"