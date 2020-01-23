let db = {
  users: [
    {
      userId: 'eYuq99zftaZRwiJhp3jpPcEIHtj1',
      email: 'user@email.com',
      handle: 'user',
      createdAt: '2019-03...',
      imageUrl: 'image/...',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'London, UK'
    }
  ],
  screams: [
    {
      userHandle: 'user',
      body: 'this is a scream body',
      userImage: 'imageUrl',
      createdAt: '2019-03-15T11:46:01.018Z',
      likeCount: 5,
      commentCount: 2
    }
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "1lzmFJnbD2MWO5FRhH76",
      body: "this is a comment body",
      createdAt: '2019-03-15T11:46:01.018Z'
    }
  ],
  notifications: [
    {
      recipient: 'user',
      sender: 'john',
      read: 'true | false',
      screamId: '1lzmFJnbD2MWO5FRhH76',
      type: 'like | comment',
      createdAt: '2019-03-15T11:46:01.018Z'
    }
  ]
}

const userDetails = {
  credentials: {
    userId: 'eYuq99zftaZRwiJhp3jpPcEIHtj1',
    email: 'user@email.com',
    handle: 'user',
    createdAt: '2019-03...',
    imageUrl: 'image/...',
    bio: 'Hello, my name is user, nice to meet you',
    website: 'https://user.com',
    location: 'London, UK'
  },
  likes: [
    {
      userHandle: "user",
      screamId: "1lzmFJnbD2MWO5FRhH76"
    },
    {
      userHandle: "user",
      screamId: "1lzmFJnbD2MWO5FRhH75"
    }
  ]
}