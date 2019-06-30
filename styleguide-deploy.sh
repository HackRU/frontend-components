#! /bin/sh
# Mostly intended to be run from travis CI
# It is expected that KEY and SECRET will be set in the environment

npm run-script build:stg
#empty bucket, then upload
aws s3 rm s3://hackru-frontend-components --recursive
aws s3 cp --recursive styleguide s3://hackru-frontend-components --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
#aws s3 cp --recursive styleguide/dist s3://hackru-frontend-components --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
aws cloudfront create-invalidation --distribution-id "E1XL8I678T00QV"  --paths "/*"
