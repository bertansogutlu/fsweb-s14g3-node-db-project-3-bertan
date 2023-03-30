-- Multi-Table Sorgu Pratiği

-- Tüm ürünler(product) için veritabanındaki ProductName ve CategoryName'i listeleyin. (77 kayıt göstermeli)
select ProductName, CategoryName from product
join category on product.categoryid = category.id
-- 9 Ağustos 2012 öncesi verilmiş tüm siparişleri(order) için sipariş id'si (Id) ve gönderici şirket adını(CompanyName)'i listeleyin. (429 kayıt göstermeli)
select [order].id,customer.CompanyName from [Order]
join customer on customer.id = [order].customerid
where orderdate<'2012-08-09'
-- Id'si 10251 olan siparişte verilen tüm ürünlerin(product) sayısını ve adını listeleyin. ProdcutName'e göre sıralayın. (3 kayıt göstermeli)
select product.productname as 'urun ismi',count(*) as 'urun sayisi' from [orderdetail]
join product on orderdetail.productid = product.id
where orderid = 10251
group by orderdetail.productid
-- Her sipariş için OrderId, Müşteri'nin adını(Company Name) ve çalışanın soyadını(employee's LastName). Her sütun başlığı doğru bir şekilde isimlendirilmeli. (16.789 kayıt göstermeli)
select [order].id,customer.companyname,employee.lastname from [Order]
join customer on customer.id = [order].customerid
join employee on employee.id = [order].employeeid