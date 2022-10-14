
Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
+ create

Terraform will perform the following actions:

# aws_instance.server will be created
+ resource "aws_instance" "server" {
+ ami                                  = "ami-02c3627b04781eada"
+ arn                                  = (known after apply)
+ associate_public_ip_address          = true
+ availability_zone                    = (known after apply)
+ cpu_core_count                       = (known after apply)
+ cpu_threads_per_core                 = (known after apply)
+ disable_api_termination              = (known after apply)
+ ebs_optimized                        = (known after apply)
+ get_password_data                    = false
+ host_id                              = (known after apply)
+ id                                   = (known after apply)
+ instance_initiated_shutdown_behavior = (known after apply)
+ instance_state                       = (known after apply)
+ instance_type                        = "t2.micro"
〜〜〜〜長いため省略〜〜〜〜
+ main_route_table_id                  = (known after apply)
+ owner_id                             = (known after apply)
+ tags                                 = {
+ "Env"     = "dev"
+ "Name"    = "Test-dev-vpc"
+ "Project" = "Test"
}
+ tags_all                             = {
+ "Env"     = "dev"
+ "Name"    = "Test-dev-vpc"
+ "Project" = "Test"
}
}

Plan: 6 to add, 0 to change, 0 to destroy.