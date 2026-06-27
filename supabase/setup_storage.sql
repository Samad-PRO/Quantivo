-- Set up Storage for User Avatars
insert into storage.buckets (id, name, public) 
values ('avatars', 'avatars', true);

-- Allow public access to read avatars
create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'avatars' );

-- Allow authenticated users to upload avatars
create policy "Users can upload their own avatar."
  on storage.objects for insert
  with check (
    bucket_id = 'avatars' and
    auth.uid() = owner
  );

-- Allow authenticated users to update their own avatar
create policy "Users can update their own avatar."
  on storage.objects for update
  using (
    bucket_id = 'avatars' and
    auth.uid() = owner
  );

-- Allow authenticated users to delete their own avatar
create policy "Users can delete their own avatar."
  on storage.objects for delete
  using (
    bucket_id = 'avatars' and
    auth.uid() = owner
  );
