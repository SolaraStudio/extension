const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const extensionsDir = path.join(__dirname, '../extensions');
const distDir = path.join(__dirname, '../dist');

function buildExtension(extensionPath) {
  const manifestPath = path.join(extensionPath, 'manifest.json');
  const srcDir = path.join(extensionPath, 'src');
  const outputDir = path.join(distDir, path.basename(extensionPath));

  if (!fs.existsSync(manifestPath)) return;
  if (!fs.existsSync(srcDir)) return;

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });

  // Copy manifest
  fs.copyFileSync(manifestPath, path.join(outputDir, 'manifest.json'));

  // Build TypeScript files
  const tsFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));
  tsFiles.forEach(file => {
    const input = path.join(srcDir, file);
    const output = path.join(outputDir, file.replace('.ts', '.js'));
    execSync(`npx tsc ${input} --outDir ${outputDir} --target es2020 --module commonjs`);
  });

  // Copy CSS files
  const cssFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.css'));
  cssFiles.forEach(file => {
    fs.copyFileSync(path.join(srcDir, file), path.join(outputDir, file));
  });

  console.log(`Built: ${path.basename(extensionPath)}`);
}

// Build all extensions
const extensions = fs.readdirSync(extensionsDir);
extensions.forEach(ext => {
  const extPath = path.join(extensionsDir, ext);
  if (fs.statSync(extPath).isDirectory()) {
    buildExtension(extPath);
  }
});

console.log('All extensions built successfully!');
