# OpenAI Agents Travel Graph 🧳 ✈️ 🗺️

A state-of-the-art multi-agent travel planning system powered by OpenAI Agents SDK and LangGraph orchestration. This system autonomously researches and plans comprehensive trips with optimized budgets, personalized recommendations, and real-time data through intelligent browser automation.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [How to Cite](#how-to-cite)

## Overview

OpenAI Agents Travel Graph is an advanced AI-powered travel planning system that leverages the latest in multi-agent technology to automate the entire travel planning process. The system orchestrates specialized agents to handle different aspects of travel planning, from destination research and flight bookings to accommodation selection and activity planning.

By combining the power of the OpenAI Agents SDK with graph-based orchestration through LangGraph, the system can maintain complex workflows while providing personalized travel recommendations that meet user preferences and budget constraints.

## Key Features

- 🤖 **Multi-Agent Architecture** - Specialized agents for different travel planning aspects
- 💰 **Budget Optimization** - Intelligent allocation of budget across travel components
- 🔍 **Real-time Research** - Autonomous web research for current travel information
- 🌐 **Browser Automation** - Intelligent interaction with travel websites
- 📋 **Detailed Itineraries** - Day-by-day schedules with activities and logistics
- 💼 **Personalization** - Tailored recommendations based on user preferences
- 🔄 **Alternative Suggestions** - Multiple options with comparisons
- 📊 **Budget Breakdowns** - Transparent cost allocation and justification

## Technology Stack

- **Primary Framework**: [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) - Core agent framework
- **Orchestration**: [LangGraph](https://github.com/langchain-ai/langgraph) - Multi-agent workflow management
- **Browser Automation**: [Stagehand](https://github.com/browserbase/stagehand) - AI-enhanced browser control
- **Web Interaction**: [Playwright](https://playwright.dev/) - Reliable browser automation
- **Data Persistence**: [Supabase](https://supabase.com/) - Database and storage
- **Web Research**: 
  - [Firecrawl](https://firecrawl.dev/) - Web content extraction
  - [Tavily API](https://tavily.com/) - Intelligent search
- **Memory Management**: OpenAI context management

## System Architecture

The system follows a modular architecture with specialized agents coordinated through LangGraph:

```
┌─────────────────────────────────────────────┐
│           Orchestrator Agent                │
│  (coordinates workflow and maintains state) │
└───────────┬─────────────┬─────────────┬────┘
            │             │             │
┌───────────▼─────┐ ┌─────▼───────┐ ┌───▼───────────┐
│  Destination    │ │   Flight    │ │ Accommodation │
│  Research Agent │ │ Search Agent│ │     Agent     │
└───────────┬─────┘ └─────┬───────┘ └───┬───────────┘
            │             │             │
┌───────────▼─────┐ ┌─────▼───────┐ ┌───▼───────────┐
│ Transportation  │ │  Activity   │ │    Budget     │
│     Agent       │ │Planning Agent│ │ Management   │
└─────────────────┘ └─────────────┘ └───────────────┘
```

Each agent uses a combination of LLM capabilities and specialized tools to perform its tasks, with the orchestration layer maintaining state and ensuring proper handoffs between agents.

## Installation

```bash
# Clone the repository
git clone https://github.com/BjornMelin/openai-agents-travel-graph.git
cd openai-agents-travel-graph

# Set up a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys and configuration
```

## Usage

Coming soon! The project is under active development.

## Development

If you'd like to contribute to the development of this project, please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for your changes
5. Run the test suite to ensure everything works
6. Submit a pull request

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## How to Cite

If you use this project in your research or work, please cite it as:

```
Melin, B. (2025). OpenAI Agents Travel Graph: A multi-agent system for autonomous travel planning. 
GitHub repository. https://github.com/BjornMelin/openai-agents-travel-graph
```

BibTeX:
```bibtex
@misc{openai-agents-travel-graph,
  author = {Melin, Bjorn},
  title = {OpenAI Agents Travel Graph: A multi-agent system for autonomous travel planning},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/BjornMelin/openai-agents-travel-graph}}
}
```