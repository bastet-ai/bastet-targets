# Bastet Targets - HackerOne Bounty Program Observatory

A comprehensive MkDocs-powered wiki for documenting and analyzing observations from HackerOne's public, paid bounty programs.

## 🎯 Purpose

This repository serves as a centralized knowledge base for:
- **Target Analysis**: Documenting reconnaissance findings on HackerOne bounty targets
- **Program Intelligence**: Tracking scope changes, reward structures, and program updates
- **Vulnerability Patterns**: Cataloging common vulnerabilities and attack vectors
- **Research Notes**: Maintaining detailed technical observations and methodologies
- **Timeline Tracking**: Chronological documentation of program evolution

## 🚀 Quick Start

### Prerequisites
- Python 3.7+
- pip package manager

### Installation

1. **Clone and navigate to the repository:**
   ```bash
   git clone https://github.com/bastet-ai/bastet-targets.git
   cd bastet-targets
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the development server:**
   ```bash
   mkdocs serve
   ```

4. **Access the wiki:**
   Open your browser to `http://127.0.0.1:8000`

### Building for Production

```bash
mkdocs build
```

This generates a static site in the `site/` directory.

## 📁 Project Structure

```
bastet-targets/
├── docs/                    # Documentation source files
│   ├── index.md            # Homepage
│   ├── programs/           # Individual program directories
│   ├── techniques/         # Attack techniques and methodologies
│   ├── tools/              # Tool documentation and configurations
│   └── templates/          # Documentation templates
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
└── README.md              # This file
```

## 📖 Documentation Organization

### Programs
Each HackerOne program gets its own directory under `docs/programs/` with standardized documentation:
- **Overview**: Program scope, rewards, and key information
- **Reconnaissance**: Target enumeration and discovery findings
- **Vulnerabilities**: Identified security issues and remediation status
- **Timeline**: Chronological updates and changes

### Techniques
Documentation of various security testing methodologies:
- **Web Application Testing**: OWASP Top 10, injection attacks, etc.
- **Network Security**: Port scanning, service enumeration
- **Mobile Security**: iOS/Android specific techniques
- **API Security**: REST/GraphQL testing approaches

### Tools
Configuration files and documentation for commonly used tools:
- **Reconnaissance**: Subdomain enumeration, port scanning
- **Vulnerability Scanning**: Automated testing tools
- **Exploitation**: Proof-of-concept development
- **Reporting**: Documentation and evidence gathering

## 🔧 Configuration

The wiki is powered by MkDocs with several useful plugins:
- **Material Theme**: Modern, responsive design
- **Search**: Full-text search capabilities
- **Navigation**: Automatic page organization
- **Code Highlighting**: Syntax highlighting for multiple languages
- **Diagrams**: Support for flowcharts and network diagrams

## 📝 Contributing

### Adding New Content

1. **New Program**: Create a new directory under `docs/programs/[program-name]/`
2. **Documentation**: Use the templates in `docs/templates/` for consistency
3. **Images**: Store in `docs/assets/images/` with descriptive names
4. **Navigation**: Update `mkdocs.yml` navigation as needed

### Writing Guidelines

- Use clear, descriptive headings
- Include code examples with proper syntax highlighting
- Add diagrams for complex attack chains or network topology
- Link related content across different sections
- Date-stamp all observations and findings

## ⚖️ Legal and Ethical Guidelines

**IMPORTANT**: This wiki is intended for educational and defensive security research purposes only.

- ✅ Document findings from authorized bug bounty programs
- ✅ Share defensive techniques and mitigations
- ✅ Contribute to the security community knowledge base
- ❌ Include live credentials, API keys, or sensitive data
- ❌ Document unauthorized or illegal activities
- ❌ Publish exploits without proper disclosure

All content should comply with:
- HackerOne's disclosure guidelines
- Applicable laws and regulations
- Responsible disclosure principles
- Program-specific terms and conditions

## 🤝 Support

For questions, suggestions, or contributions:
- Create an issue for bug reports or feature requests
- Submit pull requests for content improvements
- Follow responsible disclosure for security issues

---

**Disclaimer**: This repository contains security research documentation. All content is for educational purposes and authorized testing only. Users are responsible for ensuring compliance with applicable laws and program terms.
