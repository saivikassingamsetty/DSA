/* Write your T-SQL query statement below */
select e.name as Employee
from Employee e
inner join  Employee f on  f.id=e.managerId
where e.salary > f.salary