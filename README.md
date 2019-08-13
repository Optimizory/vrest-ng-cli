# vrest-runner

1. Executes test cases on command line, which are stored by [vREST Desktop](https://desktop.vrest.io).
2. vrest-runner command can be used in any third party schedular like cron to schedule test cases. For more information, please read our [guide](https://desktop.vrest.io/docs/guide/misc/command-line.html).
3. vrest-runner command can be used in any continuous integration server like Jenkins etc. 

### Download:
| Version       | Linux        | Mac OS       | Windows      |
| ------------- |:------------ | :------------| :----------- |
| 0.0.114       | [Download]() | [Download]() | [Download]() |

### Setup / Installation:
1. **For Windows Machine**
    
    a. This exe file can be executed on command prompt. So, double mouse click on the downloaded file will not help in executing the test cases.

    b. First, move the downloaded binary file to the directory of your choice
    
    c. Rename the binary file to just vrest-runner with the following command:

        C:\dir\path> move vrest_runner_win_x_y_z.exe vrest-runner.exe

    d. `Optional` Now add this binary file in your execution path by setting the environment variable PATH.


2. **For Linux / Mac Machine**
    a. First, move the downloaded binary file to the directory of your choice
    
    b. Rename the binary file to just vrunner with the following command:
    
        $ mv vrest_runner_linux_x_y_z vrest-runner
    
    c. Make it executable by executing the following command:
    
        $ chmod +x vrest-runner
    
    d. Now add this binary file in your execution path.


### Usage:
```bash
vrest-runner  --projectdir="<path_to_tc_directory>" 
            [--testsuitename="<test_suite_name>"]
            [--env=<environment_name>] [--nosslcheck=<boolean_value>]
            [--logger=<one_of_available_loggers>] 
            [--logfilepath="<path_of_log_file_for_logger_other_than_console>"]
```

### Options:
```bash
--projectdir     : Provide the path of the project directory which contains the testsuites.json file.
                   If you dont provide the testsuitename option, then it will execute all the test suites available in the project.
--testsuitename  : Optional: Provide the specific test suite name which you want to execute in double quotes.
-T, --timeout    : How much to wait for response after execution of test case.
                   It should be provided in unit of seconds.
                   e.g. -T=3 will wait for 3 seconds for response
-N, --env        : Provide the environment name to initialize the global variables.
                   By default environment `Default` is used.
-S, --nosslcheck : If this argument is `true`, vRUNNER will process all requests, without Secure Certificate Check.
                   By default Secure Certificate Check is enabled. 
                   This option is useful in self-signed certificate issues.
-L, --logger     : Your desired logging of the vRUNNER execution process and result.
                   This can be either `console` or `json` or `csv` or `xunit`.
                   By default `console` logger is used.
-F, --logfilepath   : Valid if other than `console` logger is selected.
                   Absolute path of the log file, into which execution process and result logs will be dumped.
                   If path/file is not present, tool will try to setup that path, and create file automatically.
                   Please note that if file already exists, that will be overwritten.
                   By default it will be the `vrest/logs.[json|xml|csv]` in current directory.
-H, --help       : To see this help.
```