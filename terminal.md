### File

```bash
  # Read the content
  cat <file-name>

  # Create if it doesn't exist
  touch <file-name>

  # Delete
  rm <file-name>

  # Copy
  cp <file-name> <file-name-2>

  # Rename or move
  mv <old-name> <some-path>/<new-name>
  
  # Search for the word and print each
  grep <key-word> <file-name>

  # Compare and display the difference
  diff <file-name> <file-name-2>

  # Get the result of whatever command and save it to a file
  <command-name> > <file-name>

  # Append the result to an existing file
  <command-name> >> <file-name>
```

### Checksum

```bash
  # Display the SHA1 value
  sha1sum <file-name>

  # Compare and highlight if matched
  sha1sum <file-name> | grep <checksum-code>
```

### Directory

```bash
  # Print working directory
  pwd

  # Change directory
  cd <dir-name>

  # Go up one directory
  cd ..

  # Create
  mkdir <dir-name>

  # Delete
  rmdir <dir-name>

  # Rename or move
  mv <old-name> <some-path>/<new-name>

  # Copy including all its content recursively
  cp -r <source-name> <destination-name>
```

### List

```bash
  # List the files and directories
  ls

  # Show more details
  ls -l

  # List all including hidden files and directories
  ls -a

  # List all and show more details
  ls -la
```

---
File Permission
---

### Indicator

`-` => a file<br>
`d` => a directory<br>
`r` => read<br>
`w` => write<br>
`x` => execute<br>

### Example

`-rwxrw-r--`<br>
`drwxrw-r--`

### Table

type | user | group | other
-- | -- | -- | --
\- | rwx | rw- | r--
d | rwx | rw- | r--

### Owner

`u` => user<br>
`g` => group<br>
`o` => other people (from the outside world)<br>

### Change mode for each owner

```bash
# Give (+) the others (o) permission to write
  chmod o+w <file-or-folder-name>

# Give (+) everyone permission to read and execute
  chmod +rx <file-or-folder-name>

# Remove (-) the group's (g) permission to execute
  chmod g-x <file-or-folder-name>
```

### Individual permission

`4` => read<br>
`2` => write<br>
`1` => execute<br>
`0` => no permissions<br>

### Figure

7 | 5 | 4
-- | -- | --
user | group | other
4+2+1 | 4+1 | 4
rwx | r-x | r--

### Change mode for multiple owners

```bash
# Give the directory and its subdirectories full permission
  chmod 777 -R <file-or-folder-name>

# Give multiple permission types
  chmod 754 <file-or-folder-name>
```

--- 
title: Vim
---

### File

```bash
# Create or edit a file
  vim <file-name>

# Save and exit
  [ESC]
  :x
  [ENTER]

# Exit without saving
  [ESC]
  :q!
  [ENTER]
```

### Tar - put multiple files into a single (tar) file

```bash
  # Compress files
  tar cvf <zip-name> <file-name-1> <file-name-2>

  # Extract zip
  tar xvf <zip-name>
```





