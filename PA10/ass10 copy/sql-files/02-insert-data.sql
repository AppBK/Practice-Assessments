-- Your code here
INSERT INTO departments (name)
VALUES
('Electrical'),
('Home & Garden'),
('Plumbing');

INSERT INTO tools (name, price, department_id)
VALUES
('Snow shovel', 16.50, 2),
('Work light', 29.99, 1),
('Wheelbarrow', 89.99, 2),
('Pipe Wrench', 18.99, 3),
('Pipe Cutter', 36.36, 3),
('Rake', 15.45, 2);

INSERT INTO customers (first_name, last_name, phone)
VALUES
('John', 'Smith', 1111111111),
('Jane', 'Doe', 2222222222);
-- ('John', 'Smith', 111-111-1111),
-- ('Jane', 'Doe', 222-222-2222);

INSERT INTO purchases (tool_id, quantity, customer_id)
VALUES
(2, 1, 1),
(5, 2, 1),
(1, 3, 2),
(2, 1, 2),
(4, 1, 2),
(5, 1, 2),
(3, 3, 1);
