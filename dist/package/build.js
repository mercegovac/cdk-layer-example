"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const esbuild_1 = __importDefault(require("esbuild"));
const fs_1 = require("fs");
const path_1 = __importStar(require("path"));
const fs_2 = __importDefault(require("fs"));
const dist = (0, path_1.join)(process.cwd(), 'dist');
if (!(0, fs_1.existsSync)(dist)) {
    (0, fs_1.mkdirSync)(dist);
}
let files = [];
const getFilesRecursively = (directory) => {
    const filesInDirectory = fs_2.default.readdirSync(directory);
    for (const file of filesInDirectory) {
        const absolute = path_1.default.join(directory, file);
        if (fs_2.default.statSync(absolute).isDirectory()) {
            getFilesRecursively(absolute);
        }
        else {
            files.push(absolute);
        }
    }
};
getFilesRecursively('./src');
// esm output bundles with code splitting
esbuild_1.default
    .build({
    entryPoints: files,
    outdir: 'dist/layer/nodejs/node_modules',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: ['node16'],
})
    .catch(() => process.exit(1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9idWlsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDJCQUEyQztBQUMzQyw2Q0FBa0M7QUFDbEMsNENBQW9CO0FBRXBCLE1BQU0sSUFBSSxHQUFHLElBQUEsV0FBSSxFQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUV6QyxJQUFJLENBQUMsSUFBQSxlQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUU7SUFDckIsSUFBQSxjQUFTLEVBQUMsSUFBSSxDQUFDLENBQUM7Q0FDakI7QUFFRCxJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7QUFFekIsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUNoRCxNQUFNLGdCQUFnQixHQUFHLFlBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsS0FBSyxNQUFNLElBQUksSUFBSSxnQkFBZ0IsRUFBRTtRQUNuQyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLFlBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDdkMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEI7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLHlDQUF5QztBQUN6QyxpQkFBTztLQUNKLEtBQUssQ0FBQztJQUNMLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLE1BQU0sRUFBRSxnQ0FBZ0M7SUFDeEMsTUFBTSxFQUFFLElBQUk7SUFDWixTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRSxJQUFJO0lBQ1osUUFBUSxFQUFFLE1BQU07SUFDaEIsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO0NBQ25CLENBQUM7S0FDRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVzYnVpbGQgZnJvbSAnZXNidWlsZCc7XG5pbXBvcnQgeyBleGlzdHNTeW5jLCBta2RpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCwgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuXG5jb25zdCBkaXN0ID0gam9pbihwcm9jZXNzLmN3ZCgpLCAnZGlzdCcpO1xuXG5pZiAoIWV4aXN0c1N5bmMoZGlzdCkpIHtcbiAgbWtkaXJTeW5jKGRpc3QpO1xufVxuXG5sZXQgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbmNvbnN0IGdldEZpbGVzUmVjdXJzaXZlbHkgPSAoZGlyZWN0b3J5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmlsZXNJbkRpcmVjdG9yeSA9IGZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeSk7XG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlc0luRGlyZWN0b3J5KSB7XG4gICAgY29uc3QgYWJzb2x1dGUgPSBwYXRoLmpvaW4oZGlyZWN0b3J5LCBmaWxlKTtcbiAgICBpZiAoZnMuc3RhdFN5bmMoYWJzb2x1dGUpLmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIGdldEZpbGVzUmVjdXJzaXZlbHkoYWJzb2x1dGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlcy5wdXNoKGFic29sdXRlKTtcbiAgICB9XG4gIH1cbn07XG5cbmdldEZpbGVzUmVjdXJzaXZlbHkoJy4vc3JjJyk7XG5cbi8vIGVzbSBvdXRwdXQgYnVuZGxlcyB3aXRoIGNvZGUgc3BsaXR0aW5nXG5lc2J1aWxkXG4gIC5idWlsZCh7XG4gICAgZW50cnlQb2ludHM6IGZpbGVzLFxuICAgIG91dGRpcjogJ2Rpc3QvbGF5ZXIvbm9kZWpzL25vZGVfbW9kdWxlcycsXG4gICAgYnVuZGxlOiB0cnVlLFxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICBtaW5pZnk6IHRydWUsXG4gICAgcGxhdGZvcm06ICdub2RlJyxcbiAgICB0YXJnZXQ6IFsnbm9kZTE2J10sXG4gIH0pXG4gIC5jYXRjaCgoKSA9PiBwcm9jZXNzLmV4aXQoMSkpO1xuIl19