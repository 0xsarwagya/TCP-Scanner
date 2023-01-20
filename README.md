# TCP Scanner
This script is a simple port scanner that uses the socket library in Python to connect to a specified host on a specified list of ports. It uses the optparse library to accept arguments from the command line, such as the target host and the list of ports to scan. The script then uses the socket() function to create a socket object and the connect() method to try to connect to the target host on each specified port. If the connection is successful, the script prints that the port is open. If the connection is unsuccessful, the script prints that the port is closed. The script also uses the threading library to execute the port scanning function simultaneously for each port in the list, allowing for faster scanning.

## How to prevent it?
* Firewall: One of the most effective ways to prevent port scanning is to use a firewall. A firewall can be used to block access to specific ports or IP addresses, which can prevent a port scanner from accessing the system.

* Disable unnecessary services: It is important to disable any unnecessary services or daemons running on the system as they may be exploited by an attacker.

* Keep software up to date: Make sure that all software and devices on the network are up to date with the latest security patches. This will help to prevent vulnerabilities that a port scanner could exploit.

* Monitor logs: Keep an eye on the system logs and look for any suspicious activity. This will help you to identify any potential port scans and take action to prevent them.

* Intrusion detection system (IDS): An intrusion detection system (IDS) can be used to detect and respond to port scans in real-time.

It's important to note that port scanning can be used for both legal and illegal purposes. As a network administrator or developer, it's important to be aware of the potential risks and take steps to protect against port scanning.
