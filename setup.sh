#!/bin/bash

# Bastet Targets - HackerOne Observatory Setup Script
# This script sets up the MkDocs environment for the wiki

set -e

echo "🎯 Setting up Bastet Targets - HackerOne Observatory Wiki"
echo "============================================================"

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is required but not installed. Please install Python 3.7+ and try again."
    exit 1
fi

echo "✅ Python 3 found: $(python3 --version)"

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔧 Activating virtual environment..."
source venv/bin/activate

# Install requirements
echo "📚 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

echo ""
echo "🚀 Setup complete! You can now:"
echo ""
echo "1. Start the development server:"
echo "   source venv/bin/activate"
echo "   mkdocs serve"
echo ""
echo "2. Build the static site:"
echo "   source venv/bin/activate" 
echo "   mkdocs build"
echo ""
echo "3. Access the wiki at: http://127.0.0.1:8000"
echo ""
echo "📖 See README.md for detailed usage instructions"
echo ""
echo "⚖️  Remember: Only use this for authorized security research!"
