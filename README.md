# vrest-ng-cli

vrest-ng-cli is a command line utility aim to perform various tasks through command line. As of now, it provides two commands:
1. **Run Command**
	1. Executes test cases on command line, which are created by [vREST NG](https://ng.vrest.io).
	2. Run command can be used in any third party schedular like cron to schedule test cases.
	3. Run command can be used in any continuous integration server like Jenkins, TeamCity, Azure Devops, CircleCI, TravisCI etc.

2. **Import Command**
	1. Import command is helpful in importing test data from various sources like vREST Cloud, Postman, Swagger.
	2. Import command can also be used in updating the swagger schema definitions in the project.

## For NodeJS projects
1. Simply install the module `vrest-ng-cli` as a dev dependency to your project by using the following commands:
```
$ cd /path/to/your/project
$ npm install vrest-ng-cli --save-dev
```
Note: Please note that the `vrest-ng-cli` npm module is wrapper around vrest-ng-cli binary. The package version determines the version of the downloaded binary.

## For projects which don't use NodeJS or npm
Simply download the binary from the table below:
### Download:

| Version | Linux | Mac OS | Windows |
| ------------- | ------------ | ------------| ----------- |
| 1.0.1 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.1/vrest_ng_cli_linux_1_0_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.1/vrest_ng_cli_mac_1_0_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.1/vrest_ng_cli_win_1_0_1.exe) |
| 1.0.0 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.0/vrest_ng_cli_linux_1_0_0) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.0/vrest_ng_cli_mac_1_0_0) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v1.0.0/vrest_ng_cli_win_1_0_0.exe) |
| 0.8.4 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.4/vrest_ng_cli_linux_0_8_4) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.4/vrest_ng_cli_mac_0_8_4) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.4/vrest_ng_cli_win_0_8_4.exe) |
| 0.8.2 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_linux_0_8_2) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_mac_0_8_2) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.2/vrest_ng_cli_win_0_8_2.exe) |
| 0.8.1 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_linux_0_8_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_mac_0_8_1) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.8.1/vrest_ng_cli_win_0_8_1.exe) |
| 0.5.3 | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_linux_0_5_3) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_mac_0_5_3) | [Download](https://github.com/Optimizory/vrest-ng-cli/releases/download/v0.5.3/vrest_runner_win_0_5_3.exe) |

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

This is the command used to import test cases into vREST NG.

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
	[--testsuitenames="<comma_separated_test_suite_names>"]
	[--tags="<comma_separated_tag_names>"]
	[--env=<environment_name>] 
	[--nosslcheck=<boolean_value>]
  [--consoleLogging=<boolean_value>]
	[--logger=<one_of_available_loggers>]
	[--logfilepath="<path_of_log_file_for_logger>"]
```

### Example
```bash
vrest-ng-cli run --projectdir="/path/to/your/project/directory"
	--testsuitenames="Sample\ Test\ Suite"
	--logger=xunit
	--logfilepath="/path/to/directory/for/vrest-logs/logs.xml"
```

### Options:
```bash
--projectdir      : Provide the path of the project directory which contains
                     the testsuites.json file. If you dont provide any filter, 
                     then it will execute all the testcases available in the project.
--testsuitenames  : Optional Filter: Provide the comma separated list of test
                     suite names which you want to execute in double quotes.
--tags            : Optional Filter: Provide the comma separated list of tags
                     which you want to execute in double quotes.
--methods         : Optional Filter: Provide the comma separated list of method
                     names which you want to execute in double quotes.
-T, --timeout     : How much to wait for response after execution of test case.
                    It should be provided in unit of seconds.
                    e.g. -T=3 will wait for 3 seconds for response
-N, --env         : Provide the environment name to initialize the global 
                    variables. By default environment `Default` is used.
-S, --nosslcheck  : If this argument is `true`, vRUNNER will process all 
                    requests, without Secure Certificate Check. By default 
                    Secure Certificate Check is enabled. This option is useful 
                    in self-signed certificate issues.
-C, --consoleLogging: If this argument is `false`, then the runner will not
                    log the results on console.
-L, --logger      : Your desired logging of the runner execution process 
                    and result. This can be either `json` or `csv` 
                    or `xunit`. By default `console` logger is used.
-F, --logfilepath : Valid if other than `console` logger is selected.
                    Absolute path of the log file, into which execution process 
                    and result logs will be dumped.
                    If path/file is not present, tool will try to setup that path, 
                    and create file automatically.
                    Please note that if file already exists, that will be overwritten.
                    By default it will be the `vrest_logs/logs.[json|xml|csv]` in 
                    current directory.
--help            : To see this help.
```