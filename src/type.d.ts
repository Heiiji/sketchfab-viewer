interface IUser {
  subscriptionCount: number
  followerCount: number
  uid: string
  modelsUrl: string
  likeCount: number
  facebookUsername: string
  biography: string
  city: string
  tagline: string
  modelCount: number
  twitterUsername: string
  email: string
  website: string
  billingCycle: string
  followersUrl: string
  collectionCount: number
  dateJoined: Date
  account: string
  displayName: string
  profileUrl: string
  followingsUrl: string
  skills: [
    {
      name: string
      uri: string
    }
  ]
  country: string
  uri: string
  apiToken: string
  username: string
  linkedinUsername: string
  likesUrl: string
  avatar: {
    images: [
      {
        url: string
        width: number
        height: number
        size: number
      }
    ]
    uid: string
    uri: string
  }
  isLimited: true
  followingCount: number
  collectionsUrl: string
}
