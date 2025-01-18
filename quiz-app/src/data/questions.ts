import { Question } from '../types';

export const questions: Question[] = [
    {
        "type": "multiple-answers",
        "question": "A retail company is preparing for a major sales event and expects unpredictable traffic spikes. They want to avoid over-provisioning infrastructure and minimize costs. Which AWS Cloud benefits would help them achieve their goals?",
        "options": [
            "Pay-as-you-go pricing",
            "Elimination of capacity planning",
            "Full infrastructure control",
            "No need to manage user access controls"
        ],
        "correctAnswers": [
            "Pay-as-you-go pricing",
            "Elimination of capacity planning"
        ],
        "explanation": "AWS's pay-as-you-go pricing allows the company to pay only for the resources they use, avoiding upfront costs. The elimination of capacity planning ensures they can scale resources dynamically to handle traffic spikes without over-provisioning.",
        "wrongOptionsExplanation": {
            "Full infrastructure control": "AWS operates under a shared responsibility model, so customers do not have full control over the underlying infrastructure.",
            "No need to manage user access controls": "While AWS provides tools like IAM for managing access controls, this responsibility lies with the customer and is not an inherent benefit of AWS."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A gaming company wants to launch its multiplayer game globally to ensure low latency for players in different regions. Which AWS Cloud benefit would best support this requirement?",
        "options": [
            "Leveraging massive scale",
            "Pay-as-you-go pricing",
            "Elimination of datacenter costs",
            "Trading variable for fixed expenses"
        ],
        "correctAnswers": ["Leveraging massive scale"],
        "explanation": "AWS's massive scale enables the company to deploy its game across multiple regions, ensuring low latency and high availability for players worldwide. This is achieved through AWS's global infrastructure, including Regions and Availability Zones.",
        "wrongOptionsExplanation": {
            "Pay-as-you-go pricing": "While this is a cost-related benefit, it does not directly address the need for global deployment.",
            "Elimination of datacenter costs": "This benefit reduces operational expenses but does not specifically support global application deployment.",
            "Trading variable for fixed expenses": "AWS promotes trading fixed expenses for variable expenses, which is unrelated to global deployment."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A startup is building a web application and wants to minimize upfront costs while ensuring they only pay for the resources they use. Which AWS Cloud benefits would help them achieve this?",
        "options": [
            "Lower variable costs",
            "Pay-as-you-go pricing",
            "Fixed regional pricing",
            "Free idle instance credits"
        ],
        "correctAnswers": [
            "Lower variable costs",
            "Pay-as-you-go pricing"
        ],
        "explanation": "AWS's economies of scale result in lower variable costs, and the pay-as-you-go pricing model ensures the startup only pays for the resources they consume. These benefits help minimize upfront costs and optimize spending.",
        "wrongOptionsExplanation": {
            "Fixed regional pricing": "AWS pricing varies by region and is not fixed.",
            "Free idle instance credits": "AWS does not provide free credits for idle instances; customers are charged for provisioned resources whether used or not."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A media company experiences fluctuating workloads due to seasonal demand for its streaming service. They want to optimize costs by scaling resources dynamically. Which AWS Cloud benefit would best address this need?",
        "options": [
            "Dynamic resource scaling",
            "Fixed regional pricing",
            "Economies of scale",
            "Global reach"
        ],
        "correctAnswers": ["Dynamic resource scaling"],
        "explanation": "AWS's dynamic resource scaling allows the company to automatically adjust resources based on real-time demand, ensuring they only pay for what they use. This helps optimize costs during periods of fluctuating workloads.",
        "wrongOptionsExplanation": {
            "Fixed regional pricing": "AWS pricing varies by region and is not fixed.",
            "Economies of scale": "While economies of scale reduce costs, they do not directly address the need for dynamic resource scaling.",
            "Global reach": "Global reach ensures low latency and high availability but does not address cost optimization for fluctuating workloads."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A financial services company experienced a system outage due to a misconfigured database. To prevent similar issues in the future, the company wants to adopt a Well-Architected Framework principle that emphasizes learning from operational events. Which principle should they adopt?",
        "options": [
            "Learn from failures",
            "Perform manual changes",
            "Implement infrequent updates",
            "Adopt a monolithic design"
        ],
        "correctAnswers": ["Learn from failures"],
        "explanation": "The Well-Architected Framework encourages learning from operational events and failures to improve system design and reliability. By analyzing the root cause of the outage, the company can implement changes to prevent similar issues in the future.",
        "wrongOptionsExplanation": {
            "Perform manual changes": "Manual changes increase the risk of human error and contradict automation best practices.",
            "Implement infrequent updates": "Infrequent updates can lead to security vulnerabilities and are not aligned with modern DevOps practices.",
            "Adopt a monolithic design": "Monolithic designs limit scalability and flexibility, which are contrary to AWS best practices."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A healthcare company is migrating its workloads to AWS. They need to ensure that their cloud environment is properly configured and that all software is up to date with the latest security patches. Which AWS Cloud Adoption Framework (CAF) perspective should they focus on, and what capabilities does it include?",
        "options": [
            "Operations perspective, which includes configuration and patch management",
            "Security perspective, which includes identity and access management",
            "Governance perspective, which includes financial management",
            "Platform perspective, which includes building scalable architectures"
        ],
        "correctAnswers": [
            "Operations perspective, which includes configuration and patch management"
        ],
        "explanation": "The Operations perspective of the AWS CAF focuses on day-to-day management of cloud services, including configuration and patch management. These capabilities ensure that workloads are secure, up to date, and meet operational requirements.",
        "wrongOptionsExplanation": {
            "Security perspective, which includes identity and access management": "While the Security perspective focuses on protecting data and systems, it does not include configuration or patch management.",
            "Governance perspective, which includes financial management": "The Governance perspective focuses on aligning cloud adoption with business goals and regulatory requirements, not operational tasks.",
            "Platform perspective, which includes building scalable architectures": "The Platform perspective is concerned with designing and implementing cloud infrastructure, not managing configurations or patches."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A media company is designing a video streaming platform on AWS. They want to ensure that each component of the platform can scale independently and that failures in one component do not affect others. Which architectural design principle should they follow?",
        "options": [
            "Segmented workloads",
            "Tightly coupled components",
            "Single monolithic component",
            "Large, infrequent changes"
        ],
        "correctAnswers": ["Segmented workloads"],
        "explanation": "Segmenting workloads involves breaking down applications into smaller, independent components, such as microservices. This approach improves scalability, fault tolerance, and flexibility, ensuring that failures in one component do not impact others.",
        "wrongOptionsExplanation": {
            "Tightly coupled components": "Tightly coupled components are interconnected, making it difficult to scale or isolate failures.",
            "Single monolithic component": "Monolithic architectures are rigid and difficult to scale, limiting flexibility and fault tolerance.",
            "Large, infrequent changes": "Large, infrequent changes increase the risk of errors and are contrary to AWS's emphasis on agility and continuous improvement."
        }
    },
    {
        "type": "multiple-answers",
        "question": "An e-commerce company wants to ensure that its website remains operational even during hardware failures or traffic spikes. Which design principles from the Reliability pillar of the AWS Well-Architected Framework should they implement?",
        "options": [
            "Automatically recover from failure",
            "Design workloads to run in a single Availability Zone",
            "Stop guessing capacity",
            "Perform manual failover to healthy resources"
        ],
        "correctAnswers": [
            "Automatically recover from failure",
            "Stop guessing capacity"
        ],
        "explanation": "The Reliability pillar emphasizes designing systems that can automatically recover from failures and dynamically acquire resources to handle varying loads. These principles ensure high availability and fault tolerance.",
        "wrongOptionsExplanation": {
            "Design workloads to run in a single Availability Zone": "Running workloads in a single Availability Zone creates a single point of failure, which is contrary to the Reliability pillar.",
            "Perform manual failover to healthy resources": "Manual failover increases recovery time and is not aligned with the principle of automatic recovery."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A logistics company is designing a data architecture to process real-time shipment tracking data. They want to reduce complexity, cost, and technical debt while enabling actionable insights. Which AWS CAF platform perspective capability should they focus on?",
        "options": [
            "Data architecture",
            "Data protection",
            "Data governance",
            "Data science"
        ],
        "correctAnswers": ["Data architecture"],
        "explanation": "The AWS CAF platform perspective capability of 'Data architecture' focuses on designing and evolving a fit-for-purpose data and analytics architecture. This helps reduce complexity, cost, and technical debt while enabling actionable insights from real-time data.",
        "wrongOptionsExplanation": {
            "Data protection": "This falls under the Security perspective and focuses on security controls and compliance requirements.",
            "Data governance": "This is part of the Governance perspective and deals with policies, standards, and controls for data management.",
            "Data science": "This is not specifically listed as a CAF platform perspective capability and is more aligned with technical implementation."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A healthcare organization is preparing to migrate to the AWS Cloud. They need to identify capability gaps across their teams and ensure stakeholder alignment. Which AWS CAF phase should they focus on?",
        "options": [
            "Envision",
            "Align",
            "Launch",
            "Scale"
        ],
        "correctAnswers": ["Align"],
        "explanation": "The Align phase of AWS CAF focuses on identifying capability gaps across the six perspectives, ensuring stakeholder alignment, and creating strategies for improving cloud readiness.",
        "wrongOptionsExplanation": {
            "Envision": "This phase focuses on identifying and prioritizing transformation opportunities, not identifying capability gaps.",
            "Launch": "This phase concentrates on delivering pilots in a production environment.",
            "Scale": "This phase focuses on expanding successful pilots to full production scale, not identifying gaps."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A retail company wants to modernize its legacy monolithic application by breaking it into microservices to improve scalability and agility. Which AWS migration strategy should they use?",
        "options": [
            "Refactor",
            "Rehost",
            "Replatform",
            "Repurchase"
        ],
        "correctAnswers": ["Refactor"],
        "explanation": "The Refactor strategy involves re-architecting applications to leverage cloud-native features and microservices architecture. This is the most suitable approach for modernizing a monolithic application.",
        "wrongOptionsExplanation": {
            "Rehost": "This strategy involves lifting and shifting applications without making architectural changes.",
            "Replatform": "This strategy makes minor optimizations without changing the core architecture.",
            "Repurchase": "This strategy involves replacing the application with a SaaS solution, which is not applicable for modernizing a monolithic application."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A manufacturing company wants to assess its readiness for migrating to the AWS Cloud. They need a framework that evaluates organizational capabilities across multiple perspectives and provides actionable plans. Which framework should they use?",
        "options": [
            "AWS Cloud Adoption Framework (CAF)",
            "AWS Pricing Calculator",
            "AWS Well-Architected Framework",
            "AWS Budgets"
        ],
        "correctAnswers": ["AWS Cloud Adoption Framework (CAF)"],
        "explanation": "The AWS Cloud Adoption Framework (CAF) is designed to assess migration readiness by evaluating organizational capabilities across six perspectives and creating actionable plans for cloud adoption.",
        "wrongOptionsExplanation": {
            "AWS Pricing Calculator": "This tool is focused on cost estimation for AWS services and does not assess migration readiness.",
            "AWS Well-Architected Framework": "This framework evaluates existing cloud architectures against best practices but does not assess migration readiness.",
            "AWS Budgets": "This tool is used for setting and tracking cloud spending limits, not for migration readiness assessment."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A pharmaceutical company is migrating its on-premises infrastructure to AWS. They want to reduce costs associated with maintaining physical data centers, such as power, cooling, and hardware upgrades. Which AWS Cloud economic benefit directly addresses this need?",
        "options": [
            "Elimination of expenses for running and maintaining data centers",
            "Economies of scale",
            "Consumption-based pricing",
            "Bring-your-own-hardware model"
        ],
        "correctAnswers": ["Elimination of expenses for running and maintaining data centers"],
        "explanation": "Migrating to AWS eliminates the need for maintaining physical infrastructure, including costs for power, cooling, and hardware upgrades. This allows organizations to shift from capital-intensive investments to a flexible, pay-as-you-go model.",
        "wrongOptionsExplanation": {
            "Economies of scale": "While economies of scale reduce costs, they do not directly address the elimination of physical infrastructure expenses.",
            "Consumption-based pricing": "Consumption-based pricing allows customers to pay only for what they use but does not directly eliminate physical infrastructure costs.",
            "Bring-your-own-hardware model": "AWS does not support bringing your own hardware; it provides and manages all infrastructure."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A startup is evaluating cloud providers and wants to minimize upfront costs while benefiting from lower operational expenses as they scale. Which AWS Cloud economic benefits should they consider? (Choose two)",
        "options": [
            "Consumption-based pricing",
            "Economies of scale",
            "Perpetual licenses",
            "Fixed pricing for all services",
            "AWS Enterprise Support at no additional cost"
        ],
        "correctAnswers": [
            "Consumption-based pricing",
            "Economies of scale"
        ],
        "explanation": "AWS's consumption-based pricing allows customers to pay only for the resources they use, eliminating large upfront costs. Economies of scale enable AWS to pass on cost savings to customers through lower variable costs and regular price reductions.",
        "wrongOptionsExplanation": {
            "Perpetual licenses": "AWS does not offer perpetual licenses; its pricing is based on flexible consumption.",
            "Fixed pricing for all services": "AWS pricing varies based on usage and service type, not fixed pricing.",
            "AWS Enterprise Support at no additional cost": "Enterprise Support requires additional payment based on usage."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A media company is migrating its video streaming platform to AWS. They want to avoid large upfront investments in hardware and instead pay for resources as they use them. Which AWS Cloud economic benefit aligns with this approach?",
        "options": [
            "Shift from capital expenses (CapEx) to operational expenses (OpEx)",
            "Elimination of operational expenses",
            "Bring-your-own-hardware model",
            "Fixed pricing for all services"
        ],
        "correctAnswers": ["Shift from capital expenses (CapEx) to operational expenses (OpEx)"],
        "explanation": "AWS allows organizations to shift from capital expenses (CapEx), such as hardware purchases, to operational expenses (OpEx), where they pay only for the resources they use. This provides flexibility and reduces upfront costs.",
        "wrongOptionsExplanation": {
            "Elimination of operational expenses": "Operational expenses are not eliminated but transformed into variable costs.",
            "Bring-your-own-hardware model": "AWS does not support bringing your own hardware; it provides and manages all infrastructure.",
            "Fixed pricing for all services": "AWS pricing varies based on usage and service type, not fixed pricing."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A global enterprise is evaluating AWS for its ability to offer competitive pricing due to its large-scale operations. Which AWS economic benefit is the company leveraging?",
        "options": [
            "Economies of scale",
            "Consumption-based pricing",
            "Perpetual licenses",
            "Fixed regional pricing"
        ],
        "correctAnswers": ["Economies of scale"],
        "explanation": "AWS's economies of scale result in lower variable costs, which are passed on to customers through competitive pricing and regular price reductions. This is a key benefit of AWS's large-scale operations.",
        "wrongOptionsExplanation": {
            "Consumption-based pricing": "While consumption-based pricing is another AWS benefit, it does not directly relate to large-scale cost efficiencies.",
            "Perpetual licenses": "AWS does not offer perpetual licenses; its pricing is based on flexible consumption.",
            "Fixed regional pricing": "AWS pricing varies by region and is not fixed."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A healthcare organization is storing sensitive patient data in Amazon S3. They want to ensure compliance with HIPAA regulations by encrypting data in transit and at rest. According to the AWS Shared Responsibility Model, what is the customer's responsibility?",
        "options": [
            "Encrypting data in transit using SSL/TLS",
            "Ensuring the physical security of the S3 storage infrastructure",
            "Maintaining the availability of the S3 service",
            "Patching the underlying storage hardware"
        ],
        "correctAnswers": ["Encrypting data in transit using SSL/TLS"],
        "explanation": "Under the AWS Shared Responsibility Model, customers are responsible for securing their data 'in' the cloud, which includes encrypting data in transit using SSL/TLS. AWS handles the physical security and availability of the S3 infrastructure.",
        "wrongOptionsExplanation": {
            "Ensuring the physical security of the S3 storage infrastructure": "AWS is responsible for the physical security of its data centers.",
            "Maintaining the availability of the S3 service": "AWS ensures the availability of the S3 service as part of its infrastructure responsibilities.",
            "Patching the underlying storage hardware": "AWS manages and patches the storage hardware as part of its infrastructure responsibilities."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company is using AWS Lambda to run its serverless application. Which tasks are the customer's responsibility under the AWS Shared Responsibility Model? (Choose two)",
        "options": [
            "Writing secure application code",
            "Managing the runtime environment",
            "Configuring IAM roles and permissions",
            "Patching the underlying operating system",
            "Maintaining the physical infrastructure"
        ],
        "correctAnswers": [
            "Writing secure application code",
            "Configuring IAM roles and permissions"
        ],
        "explanation": "Under the AWS Shared Responsibility Model, customers are responsible for security 'in' the cloud, which includes writing secure application code and configuring IAM roles and permissions. AWS manages the runtime environment, operating system, and physical infrastructure.",
        "wrongOptionsExplanation": {
            "Managing the runtime environment": "AWS manages the runtime environment for AWS Lambda.",
            "Patching the underlying operating system": "AWS is responsible for patching the operating system for AWS Lambda.",
            "Maintaining the physical infrastructure": "AWS handles the physical infrastructure as part of its responsibilities."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A retail company is running its e-commerce application on Amazon EC2 instances. Which task is AWS responsible for under the AWS Shared Responsibility Model?",
        "options": [
            "Patching the guest operating system",
            "Configuring security group rules",
            "Maintaining the physical security of the data center",
            "Ensuring the availability of the application"
        ],
        "correctAnswers": ["Maintaining the physical security of the data center"],
        "explanation": "Under the AWS Shared Responsibility Model, AWS is responsible for the security 'of' the cloud, which includes maintaining the physical security of its data centers. Customers are responsible for managing their EC2 instances, including patching the guest OS and configuring security groups.",
        "wrongOptionsExplanation": {
            "Patching the guest operating system": "Customers are responsible for patching the guest operating system on their EC2 instances.",
            "Configuring security group rules": "Customers are responsible for configuring security group rules to control traffic to their EC2 instances.",
            "Ensuring the availability of the application": "Customers are responsible for ensuring the availability of their applications running on EC2."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A gaming company is hosting its multiplayer game backend on Amazon DynamoDB. They want to ensure that only authorized users can access the database. According to the AWS Shared Responsibility Model, what is AWS's responsibility?",
        "options": [
            "Configuring IAM policies to control access to DynamoDB",
            "Ensuring the physical security of the DynamoDB infrastructure",
            "Patching the DynamoDB service",
            "Maintaining the availability of the DynamoDB service"
        ],
        "correctAnswers": [
            "Ensuring the physical security of the DynamoDB infrastructure",
            "Maintaining the availability of the DynamoDB service"
        ],
        "explanation": "AWS is responsible for the security 'of' the cloud, which includes ensuring the physical security of its infrastructure and maintaining the availability of managed services like DynamoDB. Customers are responsible for managing access to their resources using IAM policies.",
        "wrongOptionsExplanation": {
            "Configuring IAM policies to control access to DynamoDB": "Customers are responsible for managing access to their resources using IAM policies.",
            "Patching the DynamoDB service": "AWS handles patching and maintenance of the DynamoDB service as part of its responsibilities."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A financial services company is hosting its customer database on Amazon DynamoDB. They want to ensure that their data is encrypted at rest and that encryption keys are rotated regularly. According to the AWS Shared Responsibility Model, who is responsible for managing the encryption keys?",
        "options": [
            "AWS manages all encryption keys automatically",
            "The customer is responsible for managing encryption keys",
            "AWS Support rotates encryption keys upon request",
            "Encryption keys are automatically rotated without customer intervention"
        ],
        "correctAnswers": ["The customer is responsible for managing encryption keys"],
        "explanation": "Under the AWS Shared Responsibility Model, AWS provides the infrastructure and tools for encryption, but customers are responsible for managing encryption keys, including rotation, if they use customer-managed keys in AWS KMS.",
        "wrongOptionsExplanation": {
            "AWS manages all encryption keys automatically": "AWS provides the option for AWS-managed keys, but customers must manage their own keys if they choose customer-managed keys.",
            "AWS Support rotates encryption keys upon request": "AWS Support does not manage or rotate encryption keys for customers.",
            "Encryption keys are automatically rotated without customer intervention": "Automatic rotation is only available if configured by the customer for customer-managed keys."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to ensure that all IAM users in their AWS account have MFA enabled. Which AWS service or feature should they use to verify this requirement?",
        "options": [
            "AWS CloudTrail logs",
            "IAM credential reports",
            "AWS Config rules",
            "AWS Security Hub"
        ],
        "correctAnswers": ["IAM credential reports"],
        "explanation": "IAM credential reports provide a comprehensive view of the MFA status for all IAM users in an AWS account. The 'mfa_active' column in the report indicates whether MFA is enabled for each user.",
        "wrongOptionsExplanation": {
            "AWS CloudTrail logs": "CloudTrail tracks API activity but does not provide a direct view of MFA status.",
            "AWS Config rules": "Config rules monitor resource configurations but cannot directly report on IAM user MFA status.",
            "AWS Security Hub": "Security Hub aggregates security findings but does not provide detailed MFA status for IAM users."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to protect objects in an S3 bucket from accidental deletion or overwriting. Which features should they enable? (Choose two)",
        "options": [
            "S3 Server-Side Encryption",
            "S3 Versioning",
            "S3 Lifecycle Policies",
            "S3 Bucket Policies",
            "S3 Object Lock"
        ],
        "correctAnswers": ["S3 Versioning", "S3 Object Lock"],
        "explanation": "S3 Versioning maintains multiple versions of objects in a bucket, allowing recovery of deleted or overwritten data. S3 Object Lock prevents objects from being deleted or overwritten for a specified retention period.",
        "wrongOptionsExplanation": {
            "S3 Server-Side Encryption": "Encryption protects data at rest but does not prevent accidental deletion or overwriting.",
            "S3 Lifecycle Policies": "Lifecycle policies manage object transitions and expiration but do not protect against accidental deletion.",
            "S3 Bucket Policies": "Bucket policies control access permissions but do not maintain object versions or prevent overwriting."
        }
    },
    {
        "type": "multiple-choice",
        "question": "Which AWS service provides centralized security alert aggregation and compliance checks across multiple AWS accounts?",
        "options": [
            "AWS Security Hub",
            "Amazon GuardDuty",
            "AWS Trusted Advisor",
            "Amazon EventBridge"
        ],
        "correctAnswers": ["AWS Security Hub"],
        "explanation": "AWS Security Hub aggregates security findings from multiple AWS services and third-party tools, providing centralized security management and compliance checks.",
        "wrongOptionsExplanation": {
            "Amazon GuardDuty": "GuardDuty focuses on threat detection and monitoring, not centralized security alert aggregation.",
            "AWS Trusted Advisor": "Trusted Advisor provides best practice recommendations but does not aggregate security alerts.",
            "Amazon EventBridge": "EventBridge is used for event-driven applications, not security alert aggregation."
        }
    },
    {
        "type": "multiple-answers",
        "question": "Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two)",
        "options": [
            "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
            "Server-side encryption with AWS KMS managed keys (SSE-KMS)",
            "TLS",
            "SSL",
            "Transparent Data Encryption (TDE)"
        ],
        "correctAnswers": [
            "Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)",
            "Server-side encryption with AWS KMS managed keys (SSE-KMS)"
        ],
        "explanation": "Amazon S3 provides multiple server-side encryption options for protecting data at rest, with SSE-S3 being the default encryption method and SSE-KMS offering enhanced control through AWS KMS integration.",
        "wrongOptionsExplanation": {
            "TLS": "TLS is used for data encryption in transit, not for data at rest in S3.",
            "SSL": "SSL is an outdated protocol for data in transit security, not for data at rest.",
            "Transparent Data Encryption (TDE)": "TDE is a database encryption technology not applicable to S3 object storage."
        }
    },
    {
        "type": "multiple-answers",
        "question": "Which AWS services can help identify and remediate security vulnerabilities in your AWS environment? (Choose two)",
        "options": [
            "Amazon Inspector",
            "AWS Trusted Advisor",
            "AWS Config",
            "Amazon Macie",
            "Amazon GuardDuty"
        ],
        "correctAnswers": ["Amazon Inspector", "AWS Trusted Advisor"],
        "explanation": "Amazon Inspector provides automated vulnerability assessments for EC2 instances and applications. AWS Trusted Advisor offers security checks and recommendations, including identifying exposed security groups and other misconfigurations.",
        "wrongOptionsExplanation": {
            "AWS Config": "Config tracks resource configurations and compliance but does not perform vulnerability assessments.",
            "Amazon Macie": "Macie focuses on discovering and protecting sensitive data in S3 buckets, not vulnerability assessments.",
            "Amazon GuardDuty": "GuardDuty focuses on threat detection and monitoring, not vulnerability assessments."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company has a web application running on EC2 instances that need to access an S3 bucket to store logs. What is the most secure way to grant the EC2 instances access to the S3 bucket?",
        "options": [
            "Create an IAM user with S3 permissions and store the access keys on the EC2 instance",
            "Use an IAM role with S3 permissions and attach it to the EC2 instance",
            "Embed the S3 access keys directly in the application code",
            "Configure the S3 bucket policy to allow public access"
        ],
        "correctAnswers": ["Use an IAM role with S3 permissions and attach it to the EC2 instance"],
        "explanation": "Using an IAM role is the most secure way to grant EC2 instances access to S3. IAM roles provide temporary credentials that are automatically rotated and eliminate the need to store static credentials.",
        "wrongOptionsExplanation": {
            "Create an IAM user with S3 permissions and store the access keys on the EC2 instance": "Storing static credentials on an EC2 instance is insecure and violates AWS best practices.",
            "Embed the S3 access keys directly in the application code": "Embedding credentials in code is a severe security risk and violates AWS best practices.",
            "Configure the S3 bucket policy to allow public access": "Allowing public access to the S3 bucket exposes it to unauthorized access and violates security best practices."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to enforce security best practices for managing the AWS root user. Which actions should they take? (Choose two)",
        "options": [
            "Enable multi-factor authentication (MFA) for the root user",
            "Create access keys for the root user for programmatic access",
            "Use the root user for daily administrative tasks",
            "Create an IAM user with administrator privileges for daily tasks",
            "Share the root user credentials with trusted team members"
        ],
        "correctAnswers": [
            "Enable multi-factor authentication (MFA) for the root user",
            "Create an IAM user with administrator privileges for daily tasks"
        ],
        "explanation": "Enabling MFA adds an extra layer of security to the root user account, and creating an IAM user with administrator privileges ensures the root user is not used for daily tasks, reducing security risks.",
        "wrongOptionsExplanation": {
            "Create access keys for the root user for programmatic access": "Creating access keys for the root user is a significant security risk and violates AWS best practices.",
            "Use the root user for daily administrative tasks": "Using the root user for daily tasks increases the risk of accidental or malicious changes.",
            "Share the root user credentials with trusted team members": "Sharing root user credentials violates AWS security best practices and compromises accountability."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A developer needs temporary credentials to access AWS resources programmatically. Which AWS service should they use?",
        "options": [
            "AWS Security Token Service (STS)",
            "IAM Users",
            "AWS IAM Identity Center (formerly AWS SSO)",
            "Access Keys"
        ],
        "correctAnswers": ["AWS Security Token Service (STS)"],
        "explanation": "AWS STS provides temporary security credentials for programmatic access, making it ideal for applications or users requiring short-term access to AWS resources.",
        "wrongOptionsExplanation": {
            "IAM Users": "IAM Users provide long-term credentials, not temporary credentials.",
            "AWS IAM Identity Center (formerly AWS SSO)": "IAM Identity Center is designed for human users accessing multiple AWS accounts and applications, not application based access.",
            "Access Keys": "Access keys are long-term credentials and do not expire automatically."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to ensure secure access to their AWS resources for developers. Which best practices should they follow? (Choose two)",
        "options": [
            "Grant developers access to only the resources they need",
            "Use IAM groups to manage permissions for developers",
            "Create access keys for each developer and share them via email",
            "Allow developers to use the root user for administrative tasks",
            "Disable multi-factor authentication (MFA) for IAM users"
        ],
        "correctAnswers": [
            "Grant developers access to only the resources they need",
            "Use IAM groups to manage permissions for developers"
        ],
        "explanation": "Granting least privilege ensures developers only have access to the resources they need, reducing security risks. Using IAM groups simplifies permission management and ensures consistency.",
        "wrongOptionsExplanation": {
            "Create access keys for each developer and share them via email": "Sharing access keys via email is insecure and violates AWS best practices.",
            "Allow developers to use the root user for administrative tasks": "Using the root user for daily tasks is a significant security risk and violates AWS best practices.",
            "Disable multi-factor authentication (MFA) for IAM users": "Disabling MFA reduces account security and increases the risk of unauthorized access."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to allow users to log in to their AWS accounts using their corporate credentials. Which AWS service should they use?",
        "options": [
            "AWS IAM Identity Center (formerly AWS SSO)",
            "AWS Directory Service",
            "Amazon Cognito",
            "AWS Secrets Manager"
        ],
        "correctAnswers": ["AWS IAM Identity Center (formerly AWS SSO)"],
        "explanation": "AWS IAM Identity Center allows users to log in to AWS accounts using their corporate credentials, providing centralized access management and single sign-on capabilities.",
        "wrongOptionsExplanation": {
            "AWS Directory Service": "Directory Service is designed for integrating with Microsoft Active Directory, not for centralized AWS account access.",
            "Amazon Cognito": "Cognito is focused on customer identity management for applications, not centralized access for AWS accounts.",
            "AWS Secrets Manager": "Secrets Manager is designed for storing and managing secrets, not for user authentication."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to block network traffic to an instance while allowing specific inbound and outbound traffic. Which AWS services or features can be used to achieve this?",
        "options": [
            "Security Groups",
            "Amazon VPC Flow Logs",
            "Network ACLs",
            "AWS CloudTrail",
            "Amazon CloudWatch"
        ],
        "correctAnswers": ["Security Groups", "Network ACLs"],
        "explanation": "Security Groups act as virtual firewalls for EC2 instances, controlling inbound and outbound traffic. Network ACLs operate at the subnet level and can allow or deny traffic to and from subnets.",
        "wrongOptionsExplanation": {
            "Amazon VPC Flow Logs": "Flow Logs are used for monitoring and logging network traffic but do not block traffic.",
            "AWS CloudTrail": "CloudTrail logs API calls and does not manage network traffic.",
            "Amazon CloudWatch": "CloudWatch is a monitoring service and does not control or block network traffic."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to identify Amazon S3 buckets that are shared with external AWS accounts and analyze their access policies. Which AWS service will meet this requirement?",
        "options": [
            "AWS IAM Identity Center (AWS Single Sign-On)",
            "Access Analyzer for S3",
            "Amazon Macie",
            "AWS Trusted Advisor"
        ],
        "correctAnswers": ["Access Analyzer for S3"],
        "explanation": "Access Analyzer for S3 helps identify S3 buckets that are shared with external accounts by analyzing bucket policies and ACLs.",
        "wrongOptionsExplanation": {
            "AWS IAM Identity Center (AWS Single Sign-On)": "This service is focused on identity management and does not analyze S3 bucket sharing.",
            "Amazon Macie": "Macie is focused on discovering and protecting sensitive data, not analyzing bucket sharing.",
            "AWS Trusted Advisor": "Trusted Advisor provides best practices and recommendations but does not analyze S3 bucket sharing."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to protect its web application hosted on Amazon CloudFront from malicious HTTP and HTTPS requests. Which AWS service should the company use?",
        "options": [
            "Amazon GuardDuty",
            "AWS WAF",
            "Amazon Inspector",
            "AWS Shield"
        ],
        "correctAnswers": ["AWS WAF"],
        "explanation": "AWS WAF (Web Application Firewall) is designed to monitor and block malicious HTTP and HTTPS requests to web applications, including those served by Amazon CloudFront.",
        "wrongOptionsExplanation": {
            "Amazon GuardDuty": "GuardDuty is a threat detection service and does not block HTTP or HTTPS requests.",
            "Amazon Inspector": "Inspector focuses on vulnerability assessments and does not monitor or block web requests.",
            "AWS Shield": "Shield provides DDoS protection but does not block malicious HTTP or HTTPS requests."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to centrally manage and enforce security group rules across multiple AWS accounts within its organization. Which AWS service should the company use?",
        "options": [
            "AWS Firewall Manager",
            "Amazon GuardDuty",
            "AWS WAF",
            "Amazon CloudWatch"
        ],
        "correctAnswers": ["AWS Firewall Manager"],
        "explanation": "AWS Firewall Manager allows centralized management of security policies, including security group rules, across multiple AWS accounts in an organization.",
        "wrongOptionsExplanation": {
            "Amazon GuardDuty": "GuardDuty is a threat detection service and does not manage security group rules.",
            "AWS WAF": "WAF is a web application firewall and does not manage security group rules.",
            "Amazon CloudWatch": "CloudWatch is a monitoring service and does not manage security group rules."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior. Which AWS service will meet these requirements?",
        "options": [
            "AWS Shield",
            "Amazon GuardDuty",
            "AWS Firewall Manager",
            "Amazon Inspector"
        ],
        "correctAnswers": ["Amazon GuardDuty"],
        "explanation": "Amazon GuardDuty is a continuous threat detection service that monitors AWS accounts, workloads, and S3 buckets for malicious activity and unauthorized behavior.",
        "wrongOptionsExplanation": {
            "AWS Shield": "Shield provides DDoS protection but does not monitor for malicious activity or unauthorized behavior.",
            "AWS Firewall Manager": "Firewall Manager is used for managing firewall rules and does not provide continuous threat detection.",
            "Amazon Inspector": "Inspector focuses on vulnerability assessments and does not provide continuous monitoring for malicious activity."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to deploy a Java-based web application on AWS. The company requires a managed service that can automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?",
        "options": [
            "Amazon Elastic Container Service (Amazon ECS)",
            "AWS Lambda",
            "Amazon Elastic Kubernetes Service (Amazon EKS)",
            "AWS Elastic Beanstalk"
        ],
        "correctAnswers": ["AWS Elastic Beanstalk"],
        "explanation": "AWS Elastic Beanstalk is designed for deploying and managing web applications, including Java-based applications, with automated infrastructure management and monitoring capabilities.",
        "wrongOptionsExplanation": {
            "Amazon Elastic Container Service (Amazon ECS)": "ECS is designed for containerized applications and requires container expertise, which is not suitable for non-containerized Java applications.",
            "AWS Lambda": "Lambda is a serverless compute service for event-driven applications and is not suitable for traditional web applications.",
            "Amazon Elastic Kubernetes Service (Amazon EKS)": "EKS is a managed Kubernetes service for container orchestration and requires extensive container knowledge, which is not ideal for non-containerized applications."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to automate the deployment of its infrastructure as code (IaC) and ensure consistent environments across multiple AWS Regions. Which AWS service will meet these requirements?",
        "options": [
            "Amazon CloudWatch",
            "AWS Config",
            "AWS Trusted Advisor",
            "AWS CloudFormation"
        ],
        "correctAnswers": ["AWS CloudFormation"],
        "explanation": "AWS CloudFormation provides infrastructure as code capabilities with multi-region deployment support, enabling consistent and repeatable environment creation.",
        "wrongOptionsExplanation": {
            "Amazon CloudWatch": "CloudWatch is a monitoring and observability service, not for infrastructure deployment.",
            "AWS Config": "Config is a resource inventory and compliance service, not for infrastructure deployment.",
            "AWS Trusted Advisor": "Trusted Advisor provides best practice recommendations but does not handle infrastructure deployment."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to deploy a hybrid architecture that extends AWS infrastructure and services to its on-premises data center. Which AWS service will meet this requirement?",
        "options": [
            "AWS Snowmobile",
            "AWS Local Zones",
            "AWS Outposts",
            "AWS Fargate"
        ],
        "correctAnswers": ["AWS Outposts"],
        "explanation": "AWS Outposts is designed to extend AWS infrastructure and services to on-premises environments, enabling a consistent hybrid architecture.",
        "wrongOptionsExplanation": {
            "AWS Snowmobile": "Snowmobile is a data transfer service for extremely large datasets and is not designed for hybrid infrastructure.",
            "AWS Local Zones": "Local Zones are extensions of AWS Regions for low-latency applications but do not provide on-premises infrastructure.",
            "AWS Fargate": "Fargate is a serverless compute engine for containers and is not related to hybrid infrastructure."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to ensure its application is highly available and resilient to natural disasters. The application must continue to operate even if an entire AWS Region becomes unavailable. Which solution should the company implement?",
        "options": [
            "Deploy the application across multiple Availability Zones within a single AWS Region",
            "Deploy the application across multiple AWS Regions",
            "Use Amazon CloudFront to cache application data at edge locations",
            "Use AWS Outposts to extend the application to on-premises environments"
        ],
        "correctAnswers": ["Deploy the application across multiple AWS Regions"],
        "explanation": "Deploying the application across multiple AWS Regions ensures geographic redundancy and resilience to regional failures, such as natural disasters.",
        "wrongOptionsExplanation": {
            "Deploy the application across multiple Availability Zones within a single AWS Region": "This provides high availability within a Region but does not protect against regional failures.",
            "Use Amazon CloudFront to cache application data at edge locations": "CloudFront improves performance but does not provide application redundancy.",
            "Use AWS Outposts to extend the application to on-premises environments": "Outposts extend AWS infrastructure to on-premises locations but do not provide regional redundancy."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to deploy an application in multiple Availability Zones within a single AWS Region to ensure high availability. Which AWS services or features should the company use to achieve this goal?",
        "options": [
            "Elastic Load Balancing",
            "Amazon EC2 Auto Scaling",
            "Amazon CloudFront",
            "AWS Direct Connect",
            "Amazon S3"
        ],
        "correctAnswers": ["Elastic Load Balancing", "Amazon EC2 Auto Scaling"],
        "explanation": "Elastic Load Balancing distributes incoming traffic across multiple Availability Zones, ensuring high availability. Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances to maintain application performance and availability.",
        "wrongOptionsExplanation": {
            "Amazon CloudFront": "CloudFront is a content delivery network and does not manage traffic within Availability Zones.",
            "AWS Direct Connect": "Direct Connect provides dedicated network connections but does not ensure high availability within Availability Zones.",
            "Amazon S3": "S3 is an object storage service and does not manage application availability across Availability Zones."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to deploy a serverless application that processes data from multiple geographic locations with low latency. Which AWS services or features should the company use?",
        "options": [
            "AWS Lambda",
            "Amazon DynamoDB Global Tables",
            "Amazon CloudFront",
            "AWS Outposts",
            "Amazon RDS"
        ],
        "correctAnswers": ["AWS Lambda", "Amazon DynamoDB Global Tables"],
        "explanation": "AWS Lambda provides serverless compute capabilities, and DynamoDB Global Tables replicate data across multiple Regions for low-latency access. Together, they enable a serverless application with global reach.",
        "wrongOptionsExplanation": {
            "Amazon CloudFront": "CloudFront is a content delivery network and does not process application data.",
            "AWS Outposts": "Outposts extend AWS infrastructure to on-premises locations but are not serverless.",
            "Amazon RDS": "RDS is a managed relational database service and does not provide serverless or global replication capabilities."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to run containerized applications without managing the underlying infrastructure. Which AWS service is most appropriate?",
        "options": [
            "Amazon ECS with AWS Fargate",
            "Amazon EC2 Container Registry",
            "AWS Elastic Beanstalk",
            "Amazon EMR"
        ],
        "correctAnswers": ["Amazon ECS with AWS Fargate"],
        "explanation": "Amazon ECS with AWS Fargate provides a serverless compute platform that eliminates the need to manage infrastructure while running containerized applications.",
        "wrongOptionsExplanation": {
            "Amazon EC2 Container Registry": "ECR is a container image storage service and does not handle container execution or infrastructure management.",
            "AWS Elastic Beanstalk": "Elastic Beanstalk is a PaaS solution for application deployment but still requires some level of infrastructure management.",
            "Amazon EMR": "EMR is designed for big data processing and analytics, not for containerized workloads."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company needs to run a compute-intensive workload that uses graphics processing units (GPUs). Which Amazon EC2 instance type should the company use?",
        "options": [
            "Accelerated computing",
            "Compute optimized",
            "Storage optimized",
            "General purpose"
        ],
        "correctAnswers": ["Accelerated computing"],
        "explanation": "Accelerated computing instances are specifically designed for GPU-intensive workloads, providing high-performance GPUs for graphics and parallel processing tasks.",
        "wrongOptionsExplanation": {
            "Compute optimized": "Compute optimized instances are designed for CPU-intensive workloads but lack GPU capabilities.",
            "Storage optimized": "Storage optimized instances are designed for high I/O and storage performance, not GPU workloads.",
            "General purpose": "General purpose instances provide balanced resources but are not optimized for GPU-intensive applications."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to automatically adjust EC2 capacity based on application demand to ensure optimal performance and cost-efficiency. Which AWS service should the company use?",
        "options": [
            "Amazon EC2 Auto Scaling",
            "Amazon EC2 Spot Instances",
            "AWS Snow Family",
            "Amazon DynamoDB"
        ],
        "correctAnswers": ["Amazon EC2 Auto Scaling"],
        "explanation": "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on application demand and defined scaling policies.",
        "wrongOptionsExplanation": {
            "Amazon EC2 Spot Instances": "Spot Instances provide cost-effective compute capacity but do not automatically adjust capacity based on demand.",
            "AWS Snow Family": "The Snow Family is designed for edge computing and data transfer, not for scaling EC2 capacity.",
            "Amazon DynamoDB": "DynamoDB is a managed NoSQL database service and does not manage EC2 capacity."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company needs a fully managed NoSQL database that can automatically scale to handle millions of requests per second with single-digit millisecond latency. Which AWS service should the company use?",
        "options": [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon ElastiCache"
        ],
        "correctAnswers": ["Amazon DynamoDB"],
        "explanation": "Amazon DynamoDB is a fully managed NoSQL database service that automatically scales throughput capacity to handle millions of requests per second with single-digit millisecond latency.",
        "wrongOptionsExplanation": {
            "Amazon RDS": "RDS is a relational database service and does not provide the automatic scaling or NoSQL capabilities required.",
            "Amazon Redshift": "Redshift is a data warehouse service optimized for analytics, not NoSQL workloads.",
            "Amazon ElastiCache": "ElastiCache is an in-memory caching service, not a primary NoSQL database."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to migrate its on-premises MySQL database to AWS while ensuring high availability and automated backups. Which AWS service should the company use?",
        "options": [
            "Amazon Aurora",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Neptune"
        ],
        "correctAnswers": ["Amazon RDS"],
        "explanation": "Amazon RDS provides a fully managed relational database service with support for MySQL, automated backups, and high availability through Multi-AZ deployments.",
        "wrongOptionsExplanation": {
            "Amazon Aurora": "Aurora is a MySQL-compatible database but is optimized for higher performance and may not be necessary for all workloads.",
            "Amazon DynamoDB": "DynamoDB is a NoSQL database and does not support MySQL workloads.",
            "Amazon Neptune": "Neptune is a graph database service and is not suitable for relational database workloads."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company needs a database service to store and query highly connected data, such as social network relationships. Which AWS service should the company use?",
        "options": [
            "Amazon Neptune",
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift"
        ],
        "correctAnswers": ["Amazon Neptune"],
        "explanation": "Amazon Neptune is a fully managed graph database service designed for highly connected data, such as social networks, and supports graph query languages like Gremlin and SPARQL.",
        "wrongOptionsExplanation": {
            "Amazon DynamoDB": "DynamoDB is a NoSQL database but is not optimized for graph data or queries.",
            "Amazon RDS": "RDS is a relational database service and does not support graph data models.",
            "Amazon Redshift": "Redshift is a data warehouse service optimized for analytics, not graph data."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to establish secure and scalable connectivity between its on-premises network and multiple VPCs in AWS. The solution must support centralized management and reduce the complexity of managing individual connections. Which AWS services or features should the company use?",
        "options": [
            "AWS Transit Gateway",
            "AWS Direct Connect",
            "VPC Peering",
            "Site-to-Site VPN",
            "AWS PrivateLink"
        ],
        "correctAnswers": ["AWS Transit Gateway", "AWS Direct Connect"],
        "explanation": "AWS Transit Gateway simplifies connectivity by acting as a central hub for multiple VPCs and on-premises networks. AWS Direct Connect provides a dedicated private connection to AWS, ensuring consistent performance and reduced latency.",
        "wrongOptionsExplanation": {
            "VPC Peering": "VPC Peering supports one-to-one VPC connections and becomes complex with multiple VPCs.",
            "Site-to-Site VPN": "Site-to-Site VPN provides encrypted connections but does not simplify the management of multiple connections.",
            "AWS PrivateLink": "PrivateLink is designed for accessing AWS services privately within a VPC, not for connecting on-premises networks to multiple VPCs."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to improve the availability and performance of its global application by routing traffic to the closest healthy endpoint and enabling automatic failover between AWS Regions. Which AWS services or features should the company use?",
        "options": [
            "AWS Global Accelerator",
            "Amazon Route 53",
            "Amazon CloudFront",
            "Elastic Load Balancing",
            "AWS Direct Connect"
        ],
        "correctAnswers": ["AWS Global Accelerator", "Amazon Route 53"],
        "explanation": "AWS Global Accelerator provides static IP addresses and routes traffic to the closest healthy endpoints, enabling fast failover for multi-region applications. Amazon Route 53 provides DNS-based routing with health checks and failover capabilities.",
        "wrongOptionsExplanation": {
            "Amazon CloudFront": "CloudFront is a content delivery network and does not handle traffic routing or failover.",
            "Elastic Load Balancing": "Elastic Load Balancing operates within a single region and does not provide global traffic routing or failover.",
            "AWS Direct Connect": "Direct Connect provides dedicated network connectivity but does not handle traffic routing or failover."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to monitor and log all inbound and outbound traffic for its VPC to troubleshoot connectivity issues and ensure compliance. Which AWS services or features should the company use?",
        "options": [
            "VPC Flow Logs",
            "AWS CloudTrail",
            "Amazon CloudWatch Logs",
            "AWS Config",
            "AWS Trusted Advisor"
        ],
        "correctAnswers": ["VPC Flow Logs", "Amazon CloudWatch Logs"],
        "explanation": "VPC Flow Logs capture detailed information about IP traffic going to and from network interfaces in a VPC. These logs can be published to Amazon CloudWatch Logs for storage and analysis.",
        "wrongOptionsExplanation": {
            "AWS CloudTrail": "CloudTrail records API activity and user actions but does not capture network traffic.",
            "AWS Config": "AWS Config tracks resource configurations and compliance but does not monitor network traffic.",
            "AWS Trusted Advisor": "Trusted Advisor provides best practice recommendations but does not monitor or log network traffic."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company needs to extend its on-premises file storage to AWS while maintaining local access performance and ensuring cost-effectiveness. Which AWS services or features should the company use?",
        "options": [
            "AWS Storage Gateway File Gateway",
            "Amazon S3 with Gateway Endpoint",
            "Amazon EFS with EFS Mount Targets",
            "Amazon WorkDocs with Sync Client"
        ],
        "correctAnswers": ["AWS Storage Gateway File Gateway"],
        "explanation": "AWS Storage Gateway File Gateway provides seamless integration between on-premises applications and S3 storage using standard file protocols. It offers local caching for frequently accessed data, ensuring high performance and cost-effectiveness.",
        "wrongOptionsExplanation": {
            "Amazon S3 with Gateway Endpoint": "S3 with Gateway Endpoint does not provide local caching capabilities and requires application modifications to use S3 APIs.",
            "Amazon EFS with EFS Mount Targets": "EFS requires constant network connectivity to AWS and is more expensive than File Gateway for hybrid storage scenarios.",
            "Amazon WorkDocs with Sync Client": "WorkDocs is designed for document collaboration, not storage extension, and has limited performance for large-scale file operations."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to implement disaster recovery for its EC2 instances. Which AWS features should the company use to ensure both instance-level and data-level recovery?",
        "options": [
            "AMIs and EBS Snapshots",
            "Instance Store and EFS",
            "S3 and Glacier",
            "CloudWatch and Config"
        ],
        "correctAnswers": ["AMIs and EBS Snapshots"],
        "explanation": "AMIs capture the complete instance configuration for quick recovery, while EBS Snapshots provide point-in-time backups of data volumes. Together, they enable full instance and data recovery.",
        "wrongOptionsExplanation": {
            "Instance Store and EFS": "Instance Store is ephemeral and data is lost on instance stop/termination, while EFS is a file system service, not specifically for EC2 disaster recovery.",
            "S3 and Glacier": "These are object storage services not directly tied to EC2 recovery and are better suited for long-term data archival.",
            "CloudWatch and Config": "These services provide monitoring and configuration tracking but do not offer disaster recovery capabilities."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to store its data with the highest durability and availability for mission-critical applications. Which AWS storage services or features should the company use?",
        "options": [
            "Amazon S3",
            "Amazon EFS",
            "Amazon EBS",
            "Amazon FSx"
        ],
        "correctAnswers": ["Amazon S3"],
        "explanation": "Amazon S3 provides the highest durability with 99.999999999% (11 nines) and automatically replicates data across multiple Availability Zones, making it ideal for mission-critical applications.",
        "wrongOptionsExplanation": {
            "Amazon EFS": "EFS provides high availability but lower durability than S3 and is limited to regional replication.",
            "Amazon EBS": "EBS is limited to single AZ durability and has lower durability compared to S3.",
            "Amazon FSx": "FSx is a file system service with lower durability than S3 and is focused on performance rather than durability."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company needs to analyze and visualize its business data stored in Amazon S3. The solution must support SQL-based querying and provide interactive dashboards. Which AWS services should the company use?",
        "options": [
            "Amazon QuickSight",
            "Amazon Athena",
            "AWS Glue",
            "Amazon Redshift",
            "Amazon DynamoDB"
        ],
        "correctAnswers": ["Amazon QuickSight", "Amazon Athena"],
        "explanation": "Amazon QuickSight provides ML-powered business intelligence and visualization capabilities, while Amazon Athena enables SQL-based querying of data directly from S3. Together, they provide a seamless solution for data analysis and visualization.",
        "wrongOptionsExplanation": {
            "AWS Glue": "AWS Glue is an ETL service for data preparation and transformation, not for querying or visualization.",
            "Amazon Redshift": "Redshift is a data warehouse service that requires data to be loaded into it, unlike Athena which queries data directly from S3.",
            "Amazon DynamoDB": "DynamoDB is a NoSQL database service and is not designed for analytics or visualization."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to implement a recommendation system for its e-commerce platform to provide personalized product suggestions to users. Which AWS service should the company use?",
        "options": [
            "Amazon Personalize",
            "Amazon Comprehend",
            "Amazon Rekognition",
            "Amazon SageMaker"
        ],
        "correctAnswers": ["Amazon Personalize"],
        "explanation": "Amazon Personalize is specifically designed to create personalized product recommendations using machine learning. It provides APIs for real-time recommendations and integrates easily with e-commerce platforms.",
        "wrongOptionsExplanation": {
            "Amazon Comprehend": "Comprehend is a natural language processing service and is not designed for recommendation systems.",
            "Amazon Rekognition": "Rekognition is used for image and video analysis, not for generating product recommendations.",
            "Amazon SageMaker": "SageMaker is a general-purpose ML platform but requires significant customization to build a recommendation system, unlike Personalize which is purpose-built for this use case."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements?",
        "options": [
            "Amazon Connect",
            "Amazon AppStream 2.0",
            "Amazon WorkSpaces",
            "AWS Site-to-Site VPN",
            "Amazon Elastic Container Service (Amazon ECS)"
        ],
        "correctAnswers": ["Amazon AppStream 2.0", "Amazon WorkSpaces"],
        "explanation": "Amazon AppStream 2.0 and Amazon WorkSpaces are the ideal solutions for providing managed Windows virtual desktops and applications to remote employees securely. AppStream 2.0 streams applications, while WorkSpaces provides persistent virtual desktops.",
        "wrongOptionsExplanation": {
            "Amazon Connect": "Amazon Connect is a contact center service and is not designed for virtual desktop or application delivery.",
            "AWS Site-to-Site VPN": "Site-to-Site VPN provides network connectivity but does not offer virtual desktop capabilities.",
            "Amazon Elastic Container Service (Amazon ECS)": "ECS is a container orchestration service and is not designed for virtual desktop delivery."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company has a set of ecommerce applications that need to send messages to each other asynchronously. Which AWS service meets this requirement?",
        "options": [
            "AWS Auto Scaling",
            "Elastic Load Balancing",
            "Amazon Simple Queue Service (Amazon SQS)",
            "Amazon Kinesis Data Streams"
        ],
        "correctAnswers": ["Amazon Simple Queue Service (Amazon SQS)"],
        "explanation": "Amazon SQS is a fully managed message queuing service that enables asynchronous communication between application components, making it ideal for ecommerce applications.",
        "wrongOptionsExplanation": {
            "AWS Auto Scaling": "Auto Scaling manages application scaling based on demand but does not provide messaging capabilities.",
            "Elastic Load Balancing": "Elastic Load Balancing distributes incoming traffic but does not handle messaging between applications.",
            "Amazon Kinesis Data Streams": "Kinesis is designed for real-time data streaming and analytics, not for asynchronous messaging."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company needs to run an application for 2 months each year. The application will be deployed on Amazon EC2 instances, and any downtime during those 2 months must be avoided. Which EC2 purchasing option will meet these requirements MOST cost-effectively?",
        "options": [
            "Reserved Instances",
            "Dedicated Hosts",
            "Spot Instances",
            "On-Demand Instances"
        ],
        "correctAnswers": ["On-Demand Instances"],
        "explanation": "On-Demand Instances are the most cost-effective option for short-term usage while ensuring no downtime. They provide flexibility without requiring long-term commitments or risking interruptions.",
        "wrongOptionsExplanation": {
            "Reserved Instances": "Reserved Instances require a 1 or 3-year commitment, which is not cost-effective for an application running only 2 months per year.",
            "Dedicated Hosts": "Dedicated Hosts are significantly more expensive and are designed for specific licensing or compliance requirements.",
            "Spot Instances": "Spot Instances can be interrupted with only 2 minutes' notice, which conflicts with the no-downtime requirement."
        }
    },
    {
        "type": "multiple-answers",
        "question": "Which two actions demonstrate rightsizing in AWS? (Choose two.)",
        "options": [
            "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.",
            "Base the selection of Amazon EC2 instance types on past utilization patterns.",
            "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.",
            "Use Multi-AZ deployments for Amazon RDS.",
            "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk."
        ],
        "correctAnswers": [
            "Base the selection of Amazon EC2 instance types on past utilization patterns.",
            "Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers."
        ],
        "explanation": "Rightsizing involves optimizing resources to match workload requirements. Analyzing past utilization patterns helps select the right EC2 instance types, and S3 Lifecycle policies reduce storage costs by transitioning infrequently accessed data to cheaper storage classes.",
        "wrongOptionsExplanation": {
            "Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.": "This is a database optimization decision, not directly related to rightsizing.",
            "Use Multi-AZ deployments for Amazon RDS.": "Multi-AZ deployments improve availability but increase costs, which is not a rightsizing action.",
            "Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.": "Elastic Beanstalk simplifies application management but does not inherently address rightsizing."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company is planning to use Amazon EC2 instances as web servers. Customers from around the world will use the web servers, but most customers will access them only during certain hours of the day. How should the company deploy the EC2 instances to achieve the LOWEST operational cost? (Choose two.)",
        "options": [
            "Deploy the EC2 instances in multiple Availability Zones.",
            "Use an Auto Scaling group to adjust the number of instances based on demand.",
            "Use Spot Instances for the web servers.",
            "Deploy the EC2 instances in a placement group.",
            "Use Amazon CloudFront to cache content closer to users."
        ],
        "correctAnswers": [
            "Use an Auto Scaling group to adjust the number of instances based on demand.",
            "Use Amazon CloudFront to cache content closer to users."
        ],
        "explanation": "Using an Auto Scaling group ensures that the number of EC2 instances adjusts dynamically based on demand, reducing costs during off-peak hours. Amazon CloudFront reduces the load on EC2 instances by caching content closer to users, further lowering operational costs.",
        "wrongOptionsExplanation": {
            "Deploy the EC2 instances in multiple Availability Zones.": "This increases availability but does not directly reduce costs.",
            "Use Spot Instances for the web servers.": "Spot Instances are cost-effective but can be interrupted, which may not be suitable for web servers.",
            "Deploy the EC2 instances in a placement group.": "Placement groups optimize network performance but do not reduce costs."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company wants to track its AWS costs and usage by department and environment. Which AWS feature or tool should the company use to achieve this goal?",
        "options": [
            "AWS Organizations",
            "Cost Allocation Tags",
            "AWS Cost Explorer",
            "AWS Budgets"
        ],
        "correctAnswers": ["Cost Allocation Tags"],
        "explanation": "Cost Allocation Tags allow categorization of resources by department, environment, or other criteria, enabling detailed cost tracking and reporting based on tagged resources.",
        "wrongOptionsExplanation": {
            "AWS Organizations": "AWS Organizations helps manage multiple accounts but does not provide granular cost tracking by department or environment.",
            "AWS Cost Explorer": "AWS Cost Explorer provides cost visualization but requires tagging to categorize costs by department or environment.",
            "AWS Budgets": "AWS Budgets helps set and track spending limits but does not categorize costs by department or environment."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company is planning to migrate its on-premises workloads to AWS and wants to estimate costs for the migration. Which AWS tools or services can help the company achieve this? (Choose two.)",
        "options": [
            "AWS Pricing Calculator",
            "AWS Cost Explorer",
            "AWS Migration Evaluator",
            "AWS Trusted Advisor",
            "AWS Budgets"
        ],
        "correctAnswers": [
            "AWS Pricing Calculator",
            "AWS Migration Evaluator"
        ],
        "explanation": "AWS Pricing Calculator provides detailed cost estimates for AWS services before implementation, while AWS Migration Evaluator offers customized assessments of projected AWS costs for migration.",
        "wrongOptionsExplanation": {
            "AWS Cost Explorer": "AWS Cost Explorer is focused on analyzing historical costs and usage patterns, not estimating migration costs.",
            "AWS Trusted Advisor": "AWS Trusted Advisor provides best practice recommendations but does not perform detailed cost projections for migration.",
            "AWS Budgets": "AWS Budgets helps set and track spending limits but does not provide cost estimates for migration."
        }
    },
    {
        "type": "multiple-choice",
        "question": "A company is planning to migrate its third-party applications to AWS. The company wants hands-on assistance from a global team of experts to ensure the migration is completed faster and adheres to AWS best practices. Which AWS service or resource will meet these requirements?",
        "options": [
            "AWS Support",
            "AWS Professional Services",
            "AWS Launch Wizard",
            "AWS Managed Services (AMS)"
        ],
        "correctAnswers": ["AWS Professional Services"],
        "explanation": "AWS Professional Services provides a global team of experts to help with planning, executing, and optimizing AWS migrations. It ensures faster and more reliable migrations by following AWS best practices.",
        "wrongOptionsExplanation": {
            "AWS Support": "AWS Support focuses on technical support and troubleshooting, not hands-on migration assistance.",
            "AWS Launch Wizard": "AWS Launch Wizard is designed for deploying specific applications like SAP or SQL Server, not for migrating third-party applications.",
            "AWS Managed Services (AMS)": "AWS Managed Services focuses on ongoing operational management post-migration, not the migration process itself."
        }
    },
    {
        "type": "multiple-answers",
        "question": "A company is preparing for a major product launch and wants to ensure its AWS infrastructure is ready to handle the expected increase in traffic. Which actions should the company take to prepare for the launch? (Choose two.)",
        "options": [
            "Use AWS Infrastructure Event Management (IEM) for proactive guidance.",
            "Upgrade to AWS Developer Support for faster response times.",
            "Perform a load test on the application using AWS CloudFormation.",
            "Engage with a Technical Account Manager (TAM) for strategic planning.",
            "Use AWS Trusted Advisor to optimize the environment."
        ],
        "correctAnswers": [
            "Use AWS Infrastructure Event Management (IEM) for proactive guidance.",
            "Engage with a Technical Account Manager (TAM) for strategic planning."
        ],
        "explanation": "AWS Infrastructure Event Management (IEM) provides proactive guidance for large-scale events like product launches, while a Technical Account Manager (TAM) offers strategic planning and operational readiness support.",
        "wrongOptionsExplanation": {
            "Upgrade to AWS Developer Support for faster response times.": "Developer Support does not provide the necessary proactive guidance or real-time support for critical events.",
            "Perform a load test on the application using AWS CloudFormation.": "AWS CloudFormation is used for infrastructure as code, not for load testing.",
            "Use AWS Trusted Advisor to optimize the environment.": "Trusted Advisor provides optimization recommendations but does not offer event-specific guidance or support."
        }
    }
];