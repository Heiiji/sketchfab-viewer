interface IUser {
  subscriptionCount: number;
  followerCount: number;
  uid: string;
  modelsUrl: string;
  likeCount: number;
  facebookUsername: string;
  biography: string;
  city: string;
  tagline: string;
  modelCount: number;
  twitterUsername: string;
  email: string;
  website: string;
  billingCycle: string;
  followersUrl: string;
  collectionCount: number;
  dateJoined: Date;
  account: string;
  displayName: string;
  profileUrl: string;
  followingsUrl: string;
  skills: [
    {
      name: string;
      uri: string;
    }
  ];
  country: string;
  uri: string;
  apiToken: string;
  username: string;
  linkedinUsername: string;
  likesUrl: string;
  avatar: {
    images: [
      {
        url: string;
        width: number;
        height: number;
        size: number;
      }
    ];
    uid: string;
    uri: string;
  };
  isLimited: boolean;
  followingCount: number;
  collectionsUrl: string;
}

interface IModel {
  uid: string;
  tags: [
    {
      slug: string;
      uri: string;
    }
  ];
  viewerUrl: string;
  isProtected: boolean;
  categories: [
    {
      uri: string;
      uid: string;
      name: string;
      slug: string;
    }
  ];
  publishedAt: Date;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  vertexCount: number;
  user: IUser;
  isDownloadable: boolean;
  animationCount: number;
  name: string;
  description: string;
  soundCount: number;
  isAgeRestricted: boolean;
  uri: string;
  faceCount: number;
  createdAt: Date;
  thumbnails: {
    images: [
      {
        url: string;
        width: number;
        uid: string;
        height: number;
      }
    ];
  };
  embedUrl: string;
}

export { IModel, IUser };
