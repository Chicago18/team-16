create table users (id int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT, username varchar(50), password varchar(50), user_type varchar(50), );

create table users (id int unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT, username varchar(50), password varchar(50), user_type varchar(50),location varchar(50), firstName varchar(50), lastName varchar(50), email varchar(50));

insert into users values (null, 'papi', 'contrasena', 'admin', 'Miami', 'Papacito', 'Cubano', 'papi@gmail.com');

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| team_16            |
| test               |
+--------------------+
6 rows in set (0.01 sec)

mysql> use team_16;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> show tables;
+-------------------+
| Tables_in_team_16 |
+-------------------+
| users             |
+-------------------+
1 row in set (0.00 sec)

mysql> select * from users;
+----+----------+------------+-----------+----------+-----------+----------+----------------+
| id | username | password   | user_type | location | firstName | lastName | email          |
+----+----------+------------+-----------+----------+-----------+----------+----------------+
|  1 | bq       | password   | admin     | chicago  | Brandon   | Q        | bq@gmail.com   |
|  2 | papi     | contrasena | admin     | Miami    | Papacito  | Cubano   | papi@gmail.com |
+----+----------+------------+-----------+----------+-----------+----------+----------------+
2 rows in set (0.00 sec)
