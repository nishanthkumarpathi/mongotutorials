locals {
  # Replace ORG_ID, PUBLIC_KEY and PRIVATE_KEY with your Atlas variables
  mongodb_atlas_api_pub_key = "<enter-public-key>"
  mongodb_atlas_api_pri_key = "<enter-private-key>"
  mongodb_atlas_org_id      = "<enter-orgId>"

  # Replace USERNAME And PASSWORD with what you want for your database user
  # https://docs.atlas.mongodb.com/tutorial/create-mongodb-user-for-cluster/
  mongodb_atlas_database_username      = "<enter-dbuser>"
  mongodb_atlas_database_user_password = "<enter-dbuser-password>"

  # Replace IP_ADDRESS with the IP Address from where your application will connect
  # https://docs.atlas.mongodb.com/security/add-ip-address-to-list/
  mongodb_atlas_accesslistip = "<enter-ip>"
}

#
# Configure the MongoDB Atlas Provider
#
terraform {
  required_providers {
    mongodbatlas = {
      source = "mongodb/mongodbatlas"
    }
  }
}

provider "mongodbatlas" {
  public_key  = local.mongodb_atlas_api_pub_key
  private_key = local.mongodb_atlas_api_pri_key
}

#
# Create a Project
#
resource "mongodbatlas_project" "my_project" {
  name   = "testing-queries"
  org_id = local.mongodb_atlas_org_id
}

#
# Create a Shared Tier Cluster
#
resource "mongodbatlas_cluster" "my_cluster" {
  project_id = mongodbatlas_project.my_project.id
  name       = "test-cluster"

  # Provider Settings "block"
  provider_name = "TENANT"

  # options: AWS AZURE GCP
  backing_provider_name = "AWS"

  # options: M2/M5 atlas regions per cloud provider
  # GCP - CENTRAL_US SOUTH_AMERICA_EAST_1 WESTERN_EUROPE EASTERN_ASIA_PACIFIC NORTHEASTERN_ASIA_PACIFIC ASIA_SOUTH_1
  # AZURE - US_EAST_2 US_WEST CANADA_CENTRAL EUROPE_NORTH
  # AWS - US_EAST_1 US_WEST_2 EU_WEST_1 EU_CENTRAL_1 AP_SOUTH_1 AP_SOUTHEAST_1 AP_SOUTHEAST_2
  provider_region_name = "US_EAST_1"

  # options: M2 M5
  provider_instance_size_name = "M0"

  # Will not change till new version of MongoDB but must be included
  mongo_db_major_version       = "6.0"
  auto_scaling_disk_gb_enabled = "false"
}

#
# Create an Atlas Admin Database User
#
resource "mongodbatlas_database_user" "my_user" {
  username           = local.mongodb_atlas_database_username
  password           = local.mongodb_atlas_database_user_password
  project_id         = mongodbatlas_project.my_project.id
  auth_database_name = "admin"

  roles {
    role_name     = "atlasAdmin"
    database_name = "admin"
  }
}

#
# Create an IP Accesslist
#
# can also take a CIDR block or AWS Security Group -
# replace ip_address with either cidr_block = "CIDR_NOTATION"
# or aws_security_group = "SECURITY_GROUP_ID"
#
resource "mongodbatlas_project_ip_access_list" "my_ipaddress" {
  project_id = mongodbatlas_project.my_project.id
  ip_address = local.mongodb_atlas_accesslistip
  comment    = "My IP Address"
}

# Use terraform output to display connection strings.
output "connection_strings" {
  value = mongodbatlas_cluster.my_cluster.connection_strings.0.standard_srv
}
