# imIn
A NodeJS script to an unauthorized **SSH** access for **study purpose**.

## Installation
```bash
npm i -g imin
```

## Usage
Now you can use it at **any local** with **terminal**. You can see the **version** and **commands description** with:
```bash
imin --version
imin --help
```

### Command `scan`
Scan a **target host** to verify the **port status**.
#### Params
* `host` The target IP
* `port` The port to verify status

Example:
```bash
imin scan 192.168.0.1 22

# Scanning port 22 in 192.168.0.1...
# Port 22 is open
```

### Command `access`
Try to **access host** with **brute force** method using a **dictionary json** file.
#### Params
* `host` The target IP
* `dictionaryPath` The path to dictionary auth combinations

Example:
```bash
imin access 192.168.0.1

# Trying to access 192.168.0.1 with dictionary combinations...
# I'm in!
# Auth:
#	username: admin
#	password: admin
```

## Important
The project author and contributors **does not have responsability** for the reuse that is not for **study purpose**.