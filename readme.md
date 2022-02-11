## create database

## sql

procedure 用于获取创建 patient 的过程的返回值。适用于 createPatient 方法

```
show procedure status where db = 'patientsdb';

->

+------------+-------------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| Db         | Name              | Type      | Definer        | Modified            | Created             | Security_type | Comment | character_set_client | collation_connection | Database Collation |
+------------+-------------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
| patientsdb | create_and_return | PROCEDURE | root@localhost | 2022-02-11 05:28:39 | 2022-02-11 05:28:39 | DEFINER       |         | latin1               | latin1_swedish_ci    | utf8mb4_0900_ai_ci |
+------------+-------------------+-----------+----------------+---------------------+---------------------+---------------+---------+----------------------+----------------------+--------------------+
1 row in set (0.01 sec)
```

## ec2

1. create ec2 instance
2. paste scripts in the textarea
3. get ip address
4. copy folder to ec2 Server `scp -r -i nodeapi.pem docker-node-mysql ec2-user@3.86.158.100:~/`
5. log into server `ssh -i nodeapi.pem ec2-user@3.86.158.100`
6. run docker container
