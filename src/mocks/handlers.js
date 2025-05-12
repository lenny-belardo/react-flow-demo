import { delay, graphql, HttpResponse } from 'msw';

const applicationGraph = {
    getApplicationGraph: {
        apps: [
            {
                id: "app-id-aaaa",
                applicationTemplateId: "java",
                machineId: "machine-id-aaaa",
                name: "Voting System Persister",
                version: "",
                machineEntityVersion: 503,
                binFolder: "/opt/voting-system",
                description: "Java Process",
                collectedDataPath: null,
                cmdLine: "java -Dsun.misc.URLClassPath.disableJarChecking=true -jar /opt/voting-system/voting-system-persister.jar ",
                properties: {
                    LANG: "C.UTF-8",
                    SHELL: "/bin/bash",
                    LOGNAME: "voting-system",
                    SPRING_ARTEMIS_BROKER_URL: "tcp://10.130.0.13:61616",
                    SPRING_ARTEMIS_PASSWORD: "d6EmfN4iKDvyGqsa",
                    SPRING_DATASOURCE_URL: "jdbc:postgresql://10.130.0.10:5432/votes",
                    USER: "voting-system",
                    _: "/usr/bin/java",
                    JOURNAL_STREAM: "8:22813",
                    OLDPWD: "/",
                    SPRING_ARTEMIS_MODE: "native",
                    SPRING_ARTEMIS_USER: "demo",
                    SPRING_DATASOURCE_PASSWORD: "d6EmfN4iKDvyGqsa",
                    pid: "594",
                    SPRING_DATASOURCE_USERNAME: "postgres",
                    PWD: "/opt/voting-system",
                    max_memory_limit: "0",
                    INVOCATION_ID: "06ae25a056e045999130fc135f8c99b3",
                    SHLVL: "1",
                    PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin",
                    HOME: "/opt/voting-system"
                },
                protocolId: "linux",
                __typename: "ApplicationInstance"
            },
            {
                id: "app-id-bbbb",
                applicationTemplateId: "java",
                machineId: "machine-id-bbbb",
                name: "Voting System Api",
                version: "",
                machineEntityVersion: 344,
                binFolder: "/opt/voting-system",
                description: "Java Process",
                collectedDataPath: null,
                cmdLine: "java -Dsun.misc.URLClassPath.disableJarChecking=true -jar /opt/voting-system/voting-system-api.jar ",
                properties: {
                    SPRING_ARTEMIS_USER: "demo",
                    INVOCATION_ID: "8904139cdd55445d830363ae6c4c42ef",
                    OLDPWD: "/",
                    SHLVL: "1",
                    PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin",
                    SHELL: "/bin/bash",
                    USER: "voting-system",
                    max_memory_limit: "0",
                    LANG: "C.UTF-8",
                    SPRING_ARTEMIS_MODE: "native",
                    JOURNAL_STREAM: "8:5244",
                    SPRING_ARTEMIS_PASSWORD: "d6EmfN4iKDvyGqsa",
                    _: "/usr/bin/java",
                    pid: "532",
                    SYSTEMD_EXEC_PID: "469",
                    LOGNAME: "voting-system",
                    HOME: "/opt/voting-system",
                    PWD: "/opt/voting-system",
                    SPRING_ARTEMIS_BROKER_URL: "tcp://10.130.0.13:61616"
                },
                protocolId: "linux",
                __typename: "ApplicationInstance"
            },
            {
                id: "app-id-cccc",
                applicationTemplateId: "postgres_db",
                machineId: "machine-id-cccc",
                name: "Postgresql",
                version: "14",
                machineEntityVersion: 299,
                binFolder: "/usr/lib/postgresql/14/bin/postgres",
                description: "Provides Postgres DB service",
                collectedDataPath: null,
                cmdLine: "/usr/lib/postgresql/14/bin/postgres -D /var/lib/postgresql/14/main -c config_file=/etc/postgresql/14/main/postgresql.conf",
                properties: {
                    pg_data_path: " /var/lib/postgresql/14/main ",
                    pid: "525",
                    pids: "[533,528,3332,532,529,3318,534,525,530,3320,3317,3328,3561,3330,3441,3319,3315]"
                },
                protocolId: "linux",
                __typename: "ApplicationInstance"
            },
            {
                id: "app-id-dddd",
                applicationTemplateId: "activemq",
                machineId: "machine-id-dddd",
                name: "Apache ActiveMQ",
                version: "",
                machineEntityVersion: 490,
                binFolder: "",
                description: "Multi-protocol, Java-based message broker",
                collectedDataPath: null,
                cmdLine: "java -XX:AutoBoxCacheMax=20000 -XX:+PrintClassHistogram -XX:+UseG1GC -XX:+UseStringDeduplication -Xms512M -Xmx2G -Dhawtio.disableProxy=true -Dhawtio.realm=activemq -Dhawtio.offline=true -Dhawtio.rolePrincipalClasses=org.apache.activemq.artemis.spi.core.security.jaas.RolePrincipal -Dhawtio.http.strictTransportSecurity=max-age=31536000;includeSubDomains;preload -Djolokia.policyLocation=file:/var/lib/voting-system-broker/etc/jolokia-access.xml -Dlog4j2.disableJmx=true -Dhawtio.role=amq -Djava.security.auth.login.config=/var/lib/voting-system-broker/etc/login.config -classpath /opt/artemis/lib/artemis-boot.jar -Dartemis.home=/opt/artemis -Dartemis.instance=/var/lib/voting-system-broker -Djava.library.path=/opt/artemis/bin/lib/linux-x86_64 -Djava.io.tmpdir=/var/lib/voting-system-broker/tmp -Ddata.dir=/var/lib/voting-system-broker/data -Dartemis.instance.etc=/var/lib/voting-system-broker/etc org.apache.activemq.artemis.boot.Artemis run ",
                properties: {
                    pid: "485",
                    PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin",
                    ARTEMIS_INSTANCE: "/var/lib/voting-system-broker",
                    USER: "artemis",
                    OLDPWD: "/var/lib/voting-system-broker/bin",
                    max_memory_limit: "2048",
                    JOURNAL_STREAM: "8:4423",
                    INVOCATION_ID: "2a4515dbc56343998fb9b2d358c75904",
                    LANG: "C.UTF-8",
                    PWD: "/",
                    HOME: "/opt/artemis",
                    LOGNAME: "artemis",
                    SYSTEMD_EXEC_PID: "409"
                },
                protocolId: "linux",
                __typename: "ApplicationInstance"
            }
        ],
        hosts: [
            {
                collectedAt: 1746529025176,
                machineId: "machine-id-aaaa",
                name: "demo-vote-persister-ubuntu2004-euw2",
                description: "",
                __typename: "GraphHost"
            },
            {
                collectedAt: 1746528689031,
                machineId: "machine-id-dddd",
                name: "demo-vote-mq-ubuntu2204-euw2",
                description: "",
                __typename: "GraphHost"
            },
            {
                collectedAt: 1746528686504,
                machineId: "machine-id-cccc",
                name: "demo-vote-psql-ubuntu2204-euw2",
                description: "",
                __typename: "GraphHost"
            },
            {
                collectedAt: 1746528685478,
                machineId: "machine-id-bbbb",
                name: "demo-vote-api-ubuntu2204-euw2",
                description: "",
                __typename: "GraphHost"
            }
        ],
        relations: [
            {
                id: "rel-aaaa",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 57882,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-bbbb",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 58194,
                remoteIp: "10.130.0.13",
                remotePort: 61616,
                remoteAppId: "app-id-dddd",
                __typename: "AppConnection"
            },
            {
                id: "rel-cccc",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 58598,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-dddd",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 33680,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-eeee",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 60032,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-ffff",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 45426,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-gggg",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 33694,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-hhhh",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 51722,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-iiii",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 44804,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-jjjj",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 33686,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-kkkk",
                machineId: "machine-id-aaaa",
                connectionState: "Established",
                appId: "app-id-aaaa",
                localIp: "10.130.0.11",
                localPort: 44802,
                remoteIp: "10.130.0.10",
                remotePort: 5432,
                remoteAppId: "app-id-cccc",
                __typename: "AppConnection"
            },
            {
                id: "rel-llll",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 5672,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-mmmm",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 8161,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-nnnn",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 1883,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-oooo",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 5445,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-pppp",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 61613,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-qqqq",
                machineId: "machine-id-dddd",
                connectionState: "Established",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 61616,
                remoteIp: "10.130.0.12",
                remotePort: 51712,
                remoteAppId: "app-id-bbbb",
                __typename: "AppConnection"
            },
            {
                id: "rel-rrrr",
                machineId: "machine-id-dddd",
                connectionState: "Listen",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 61616,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: "app-id-bbbb",
                __typename: "AppConnection"
            },
            {
                id: "rel-ssss",
                machineId: "machine-id-dddd",
                connectionState: "Established",
                appId: "app-id-dddd",
                localIp: "10.130.0.13",
                localPort: 61616,
                remoteIp: "10.130.0.11",
                remotePort: 58194,
                remoteAppId: "app-id-bbbb",
                __typename: "AppConnection"
            },
            {
                id: "rel-tttt",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 38990,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-uuuu",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 48866,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-vvvv",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 43722,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-wwww",
                machineId: "machine-id-cccc",
                connectionState: "Listen",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "0.0.0.0",
                remotePort: 0,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-xxxx",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 58598,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-yyyy",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 48860,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-zzzz",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 44196,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-aabb",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 43712,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-bbcc",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 40128,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-ccdd",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 57882,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-ddee",
                machineId: "machine-id-cccc",
                connectionState: "Established",
                appId: "app-id-cccc",
                localIp: "10.130.0.10",
                localPort: 5432,
                remoteIp: "10.130.0.11",
                remotePort: 40252,
                remoteAppId: "app-id-aaaa",
                __typename: "AppConnection"
            },
            {
                id: "rel-eeff",
                machineId: "machine-id-bbbb",
                connectionState: "Listen",
                appId: "app-id-bbbb",
                localIp: "10.130.0.12",
                localPort: 8080,
                remoteIp: "::",
                remotePort: 0,
                remoteAppId: null,
                __typename: "AppConnection"
            },
            {
                id: "rel-ffgg",
                machineId: "machine-id-bbbb",
                connectionState: "Established",
                appId: "app-id-bbbb",
                localIp: "10.130.0.12",
                localPort: 51712,
                remoteIp: "10.130.0.13",
                remotePort: 61616,
                remoteAppId: "app-id-dddd",
                __typename: "AppConnection"
            }
        ],
        appToHost: [
            {
                appId: "app-id-aaaa",
                hostId: "machine-id-aaaa",
                __typename: "AppToHost"
            },
            {
                appId: "app-id-bbbb",
                hostId: "machine-id-bbbb",
                __typename: "AppToHost"
            },
            {
                appId: "app-id-cccc",
                hostId: "machine-id-cccc",
                __typename: "AppToHost"
            },
            {
                appId: "app-id-dddd",
                hostId: "machine-id-dddd",
                __typename: "AppToHost"
            }
        ],
        __typename: "AppGraph"
    }
};

export const handlers = [
    graphql.query('ApplicationGraph', async () => {
      // Add an artificial delay of 1000ms
      await delay(5000);
  
      return HttpResponse.json({
        data: {
          applicationGraph
        }
      });
    })
  ];
