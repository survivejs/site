---
title: "GruCloud - Infrastructure as Code in JavaScript - Interview with Frederic Heem"
date: 2021-02-03
headerImage: "assets/img/cloud.jpg"
headerAuthor: "Free-Photos"
headerSource: "https://pixabay.com/photos/sky-clouds-sunlight-dark-690293/"
keywords: ["interview", "cloud", "devops"]
---

For me, it's always amazing how complex infrastructure it's possible to configure these days. If you master a platform like AWS or GCP, you can do quite a lot. Earlier it took a lot of expertise and hardware to pull this off, and these days you can go to a suitable service and manage it all through a web interface.

As a JavaScript programmer, it's interesting for me you can achieve the same but using a language I know. Frederic Heem has developed a new solution called GruCloud that does this.

## Can you tell a bit about yourself?

![Frederic Heem|100|100|author](assets/img/starhackit/hf.jpg)

I have been developing software for the last 20 years, mainly in the UK and Italy. Lately, the focus has been on JavaScript: frontend, backend, and mobile.

T> In case you want to learn more of Frederic's work, I interviewed him a few years back about his [starter kit for React and Node](/blog/starhackit-interview/).

## How would you describe _GruCloud_ to someone who has never heard of it?

GruCloud is an _Infrastructure as Code_ tool. DevOps people can write in JavaScript a description of their cloud infrastructure. Then they use the GruCloud CLI to manage the deployment, update, and destruction of such infrastructure. By cloud infrastructure, we mean servers, public IP addresses, DNS settings, file storage, and so on.

At the moment, GruCloud interfaces with AWS, Google Cloud, and Microsoft Azure.

## How does _GruCloud_ work?

First of all, we describe infrastructure in JavaScript, for example, a virtual machine on Google Cloud:

```js
const { GoogleProvider } = require("@grucloud/core");

exports.createStack = async ({ config }) => {
  const provider = GoogleProvider({ config });
  const server = await provider.makeVmInstance({
    name: `webserver`,
    properties: () => ({
      diskSizeGb: "20",
      machineType: "f1-micro",
      sourceImage:
        "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts",
      metadata: {
        items: [
          {
            key: "enable-oslogin",
            value: "True",
          },
        ],
      },
    }),
  });

  return {
    provider,
  };
};
```

The next step is to use the GruCloud command-line interface **gc** to deploy, list, update and destroy the server.

In the first step, planning, the tool performs the following steps:

1. It queries the cloud providers to find out which resources are already deployed
2. Compares to what should be installed according to the code
3. Produces a plan of what needs to be deployed or removed

```bash
 $ gc apply
Querying resources on 1 provider: google
✓ google
  ✓ Initialising
  ✓ Listing 16/16
  ✓ Querying
    ✓ VmInstance 1/1
┌──────────────────────────────────────────────────────────────────────┐
│ 1 VmInstance from google                                             │
├───────────┬──────────┬───────────────────────────────────────────────┤
│ Name      │ Action   │ Data                                          │
├───────────┼──────────┼───────────────────────────────────────────────┤
│ webserver │ CREATE   │ kind: compute#instance                        │
│           │          │ name: webserver                               │
│           │          │ zone: projects/grucloud-e2e/zones/southameri… │
│           │          │ machineType: projects/grucloud-e2e/zones/sou… │
│           │          │ labels:                                       │
│           │          │   managed-by: grucloud                        │
│           │          │   stage: dev                                  │
│           │          │ metadata:                                     │
│           │          │   items:                                      │
│           │          │     - key: enable-oslogin                     │
│           │          │       value: True                             │
│           │          │   kind: compute#metadata                      │
│           │          │ disks:                                        │
│           │          │   - kind: compute#attachedDisk                │
│           │          │     type: PERSISTENT                          │
│           │          │     boot: true                                │
│           │          │     mode: READ_WRITE                          │
│           │          │     autoDelete: true                          │
│           │          │     deviceName: webserver-managed-by-gru      │
│           │          │     initializeParams:                         │
│           │          │       sourceImage: projects/ubuntu-os-cloud/… │
│           │          │       diskType: projects/grucloud-e2e/zones/… │
│           │          │       diskSizeGb: 20                          │
│           │          │     diskEncryptionKey:                        │
│           │          │ networkInterfaces:                            │
│           │          │   - kind: compute#networkInterface            │
│           │          │     subnetwork: projects/grucloud-e2e/region… │
│           │          │     accessConfigs:                            │
│           │          │       - kind: compute#accessConfig            │
│           │          │         name: External NAT                    │
│           │          │         type: ONE_TO_ONE_NAT                  │
│           │          │         networkTier: PREMIUM                  │
│           │          │     aliasIpRanges: []                         │
│           │          │ displayDevice:                                │
│           │          │   enableDisplay: false                        │
│           │          │ canIpForward: false                           │
│           │          │ scheduling:                                   │
│           │          │   preemptible: false                          │
│           │          │   onHostMaintenance: MIGRATE                  │
│           │          │   automaticRestart: true                      │
│           │          │   nodeAffinities: []                          │
│           │          │ deletionProtection: false                     │
│           │          │ reservationAffinity:                          │
│           │          │   consumeReservationType: ANY_RESERVATION     │
│           │          │ shieldedInstanceConfig:                       │
│           │          │   enableSecureBoot: false                     │
│           │          │   enableVtpm: true                            │
│           │          │   enableIntegrityMonitoring: true             │
│           │          │ confidentialInstanceConfig:                   │
│           │          │   enableConfidentialCompute: false            │
│           │          │                                               │
└───────────┴──────────┴───────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────────┐
│ Plan summary for provider google                                    │
├─────────────────────────────────────────────────────────────────────┤
│ DEPLOY RESOURCES                                                    │
├────────────────────┬────────────────────────────────────────────────┤
│ VmInstance         │ webserver                                      │
└────────────────────┴────────────────────────────────────────────────┘
? Are you sure to deploy 1 resource, 1 type on 1 provider? › (y/N)

```

In the second step, performing the deployment, the tool calls the cloud providers' API to create, updates or deletes resources according to the plan produced in the previous step:

```bash
Deploying resources on 1 provider: google
✓ google
  ✓ Initialising
  ✓ Deploying
    ✓ VmInstance 1/1
1 resource deployed of 1 type and 1 provider
Running OnDeployed resources on 1 provider: google
✓ google
  ✓ Initialising
Command "gc apply" executed in 2m 5s
```

At this stage, the server should be up and running.

To check the state of the deployment, you can use the **list** command.

```bash
gc list
```

To reduce your cloud provider bills, destroy the infrastructure:

```bash
gc destroy
```

Things can get a little bit more complex with more resources and the dependencies between them. The **gc graph** command produces a graph displaying the infrastructure:

![graph](assets/img/grucloud.svg)

GruCloud takes care of creating and destroying the resources in the right order.

## How does _GruCloud_ differ from other solutions?

The two other solutions on the market are [Terraform](https://www.terraform.io/) and [Pulumi](https://www.pulumi.com/).

With Terraform, the infrastructure code is written in **Domain Specific Language** called HCL, as opposed to Pulumi and GruCloud, where you use JavaScript, a **General Purpose Language**.

The other difference is in the implementation of the numerous resources for the various cloud providers. JavaScript for GruCloud and Go for Terraform and Pulumi.

## Why did you develop _GruCloud_?

Infrastructure as Code is gaining traction and popularity. At the moment, there is no tool entirely written in JavaScript, and GruCloud is filling this gap.

## What next?

Many resources on various cloud providers need to be implemented. For example, AWS Lambda and Kubernetes are missing at the moment. Fortunately, adding a new simple resource is relatively easy. Complete with testing and documentation, it should take about a day on average.

## What does the future look like for _GruCloud_ and web development in general? Can you see any particular trends?

Many companies are moving from owning their equipment to renting from cloud providers. So the pool of potential users is still increasing. The future is bright.

## What advice would you give to programmers getting into web development?

Stay focus on one problem at a time, and finish it.

## Who should I interview next?

Richard Tong, the author of [rubico](https://github.com/a-synchronous/rubico), an asynchronous functional programming library heavily used by GruCloud.

## Any last remarks?

For more information about this project, visit [GruCloud](https://grucloud.com)

## Conclusion

I find it highly interesting it's possible to define and orchestrate infrastructure by using JavaScript alone. That means I don't have to become an expert at navigating a particular provider's user interface, which seems like a win.

T> [Head to GruCloud site](https://www.grucloud.com/) to learn more about the solution, [star them on GitHub](https://github.com/grucloud/grucloud), and [follow them on Twitter](https://twitter.com/grucloud_iac).
