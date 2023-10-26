var Minio = require('minio')
require('dotenv').config()
// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
  endPoint: process.env.MINIO_ENDPOINT,
  useSSL: true,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY
})

// File that needs to be uploaded.
var file = './66.jpg'

// Make a bucket called europetrip.
minioClient.makeBucket('europetrip', 'ap-south-1', function (err) {
  if (err) return console.log(err)

  console.log('Bucket created successfully in "us-east-1".')

  var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    example: 5678,
  }
  // Using fPutObject API upload your file to the bucket europetrip.
  minioClient.fPutObject('europetrip', '66.jpg', file, metaData, function (err, etag) {
    if (err) return console.log(err)
    console.log('File uploaded successfully.')
  })
})
