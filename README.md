# Classroom Backend

## esbuild Platform Compatibility Issue

If you encounter the following error when running `npm run db:generate`:

```
You installed esbuild for another platform than the one you're currently using.
This won't work because esbuild is written with native code and needs to
install a platform-specific binary executable.
```

This happens because esbuild requires platform-specific binaries, and you're trying to use a binary compiled for one platform (e.g., Windows) on another platform (e.g., Linux/WSL).

### How to Fix

#### For Windows Users:
1. Run the provided batch script:
   ```
   .\fix-esbuild.bat
   ```

#### For Linux/WSL Users:
1. Make the shell script executable:
   ```
   chmod +x fix-esbuild.sh
   ```
2. Run the script:
   ```
   ./fix-esbuild.sh
   ```

These scripts will:
1. Remove the existing `node_modules` directory
2. Reinstall all dependencies for your current platform
3. Allow you to run `npm run db:generate` successfully

### Alternative Solutions

If the above solution doesn't work, you can try:

1. **Manual reinstallation**:
   ```
   rm -rf node_modules
   npm install
   ```

2. **Using esbuild-wasm** (slower but platform-independent):
   ```
   npm uninstall esbuild
   npm install esbuild-wasm
   ```
   Note: This approach may be significantly slower.

### Prevention

To prevent this issue in the future:
- Don't copy `node_modules` between different platforms
- Always run `npm install` on the platform where you'll be running the code
- If using Docker, include the `npm install` step in your Dockerfile rather than copying `node_modules`