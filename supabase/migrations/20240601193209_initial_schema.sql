create table kesam_consumption (
  id serial primary key,    
  date date not null
);
ALTER TABLE kesam_consumption ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access" ON kesam_consumption FOR SELECT TO anon, authenticated USING (true);
