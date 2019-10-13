

# vrest-ng-cli

vrest-ng-cli is a command line utility aim to perform various tasks through command line. As of now, it provides two commands:
1. **Run Command**
	1.  Executes test cases on command line, which are created by [vREST NG](https://ng.vrest.io).
	2. Run command can be used in any third party schedular like cron to schedule test cases.
	3. Run command can be used in any continuous integration server like Jenkins, TeamCity, Azure Devops, CircleCI, TravisCI etc.

2. **Import Command**
	1.  Import command is helpful in importing test data from various sources like vREST Cloud, Postman, Swagger.
	2. Import command can also be used in updating the swagger schema definitions in the project.

### Download:

| Version | Linux | Mac OS | Windows |
| ------------- | ------------ | ------------| ----------- |
| 0.8.2 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_linux_0_8_2) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_mac_0_8_2) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_win_0_8_2.exe) |
| 0.8.1 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_linux_0_8_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_mac_0_8_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_win_0_8_1.exe) |
| 0.5.3 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_linux_0_5_3) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_mac_0_5_3) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_win_0_5_3.exe) |
| 0.0.116 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.116/vrest_runner_linux_0_0_116) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.116/vrest_runner_mac_0_0_116) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.116/vrest_runner_win_0_0_116.exe) |
| 0.0.115 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.115/vrest_runner_linux_0_0_115) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.115/vrest_runner_mac_0_0_115) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.0.115/vrest_runner_win_0_0_115.exe) |

### Setup / Installation:

1.  **For Windows Machine**
	1. This exe file can be executed on command prompt. So, double mouse click on the downloaded file will not help in executing the test cases.  
	2. First, move the downloaded binary file to the directory of your choice
	3. Rename the binary file to just vrest-ng-cli with the following command:

    `C:\dir\path> move vrest_ng_cli_win_x_y_z.exe vrest-ng-cli.exe`

	4. `Optional` Now add this binary file in your execution path by setting the environment variable PATH.

2.  **For Linux / Mac Machine**
	1. First, move the downloaded binary file to the directory of your choice
	2. Rename the binary file to just vrunner with the following command:

    `$ mv vrest_ng_cli_linux_x_y_z vrest-ng-cli`

	3. Make it executable by executing the following command:

    `$ chmod +x vrest-ng-cli`

	4. Now add this binary file in your execution path.

## Import Command

This is the command used to import test cases into vREST Desktop.

### Usage Instructions
```bash
vrest-ng-cli import --projectdir="<path_to_project_directory>"
	--source="<import_source>"
	--sourcefile="<source_file_path>"
	[--defaulttestsuite="<test_suite_name>"]
	[--updateonly="<true_or_false>"]
```
### Example
```bash
vrest-ng-cli import --source="swagger"
	--sourcefile="/path/to/your/swagger/file.json|yaml"
	--projectdir="/path/to/your/project/directory"
	--defaulttestsuite="Sample\ Test\ Suite"
	--updateonly="true"
```

### Options
```bash
--help              : Show help
--source            : Import Source [required]
                        [choices: "vrest-cloud", "swagger", "postman"]
--sourcefile        : Provide the source file path which you want to import.
--projectdir        : Provide the path of the project directory in you want to
                      import/re-import the data. [required]
--defaulttestsuite  : Provide the default test suite name.
--updateonly        : Set this option if you want to update the test data instead of 
                      creating again. This option is applicable only for swagger source 
                      as of now. [default: false]
```

## Run Command
This is the command used for running the test cases that you stored in the project directory.

### Usage Instructions
```bash
vrest-ng-cli run --projectdir="<path_to_tc_directory>"
	[--testsuitename="<test_suite_name>"]
	[--env=<environment_name>] 
	[--nosslcheck=<boolean_value>]
	[--logger=<one_of_available_loggers>]
	[--logfilepath="<path_of_log_file_for_logger_other_than_console>"]
```

### Example
```bash
vrest-ng-cli run --projectdir="/path/to/your/project/directory"
	--testsuitename="Sample\ Test\ Suite"
	--logger=xunit
	--logfilepath="/path/to/directory/for/vrest-logs/logs.xml"
```

### Options:
```bash
--projectdir      : Provide the path of the project directory which contains the 
                    testsuites.json file.
                    If you dont provide the testsuitename option, then it will 
                    execute all the test suites available in the project.
--testsuitename   : Optional: Provide the specific test suite name which you want 
                    to execute in double quotes.
-T, --timeout     : How much to wait for response after execution of test case.
                    It should be provided in unit of seconds.
                    e.g. -T=3 will wait for 3 seconds for response
-N, --env         : Provide the environment name to initialize the global 
                    variables. By default environment `Default` is used.
-S, --nosslcheck  : If this argument is `true`, vRUNNER will process all 
                    requests, without Secure Certificate Check. By default 
                    Secure Certificate Check is enabled. This option is useful 
                    in self-signed certificate issues.
-L, --logger      : Your desired logging of the vRUNNER execution process 
                    and result. This can be either `console` or `json` or `csv` 
                    or `xunit`. By default `console` logger is used.
-F, --logfilepath : Valid if other than `console` logger is selected.
                    Absolute path of the log file, into which execution process 
                    and result logs will be dumped.
                    If path/file is not present, tool will try to setup that path, 
                    and create file automatically.
                    Please note that if file already exists, that will be overwritten.
                    By default it will be the `vrest/logs.[json|xml|csv]` in 
                    current directory.
-H, --help        : To see this help.
```