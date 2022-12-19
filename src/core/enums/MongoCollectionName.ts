enum MongoCollectionName {
    ThreeDSAuthentication = 'threeDSAuthentication',
}

export const allCollections: string[] = Object.values(MongoCollectionName);

export default MongoCollectionName;
